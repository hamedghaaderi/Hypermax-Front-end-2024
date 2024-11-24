import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBasket = create(
  persist(
    (set, get: () => any) => ({
      products: [],
      orders: [],
      invoice: {
        totalPrice: 0,
      },
      action: {
        add: (product: any, off: number) => {
          const alreadyExistProducts: boolean = get().products.some(
            (_product: any) => _product.id === product.id
          );
          const alreadyExistOrders: boolean = get().orders.some(
            (_product: any) => _product.product_id === product.id
          );
          if (alreadyExistProducts || alreadyExistOrders) {
            return set((oldBasket: any) => ({
              invoice: {
                totalPrice: oldBasket.invoice.totalPrice + off,
              },
              products: oldBasket.products.map((_product: any) => {
                if (_product.id === product.id) {
                  return {
                    ...product,
                    quantity: _product.quantity + 1,
                  };
                }
                return _product;
              }),
              orders: oldBasket.orders.map((_product: any) => {
                if (_product.product_id === product.id) {
                  return {
                    product_id: product.id,
                    quantity: _product.quantity + 1,
                  };
                }
                return _product;
              }),
            }));
          }

          set((oldBasket: any) => ({
            invoice: {
              totalPrice: oldBasket.invoice.totalPrice + off,
            },
            products: [...oldBasket.products, { ...product, quantity: 1 }],
            orders: [
              ...oldBasket.orders,
              { product_id: product.id, quantity: 1 },
            ],
          }));
        },
        remove: (product: any, off: number) => {
          const shouldRemoveProducts = get().products.some(
            (_product: any) =>
              _product.quantity === 1 && _product.id === product.id
          );
          const shouldRemoveOrders = get().orders.some(
            (_product: any) =>
              _product.quantity === 1 && _product.product_id === product.id
          );
          if (shouldRemoveProducts || shouldRemoveOrders) {
            return set((oldBasket: any) => ({
              invoice: {
                totalPrice: oldBasket.invoice.totalPrice - off,
              },
              products: oldBasket.products.filter(
                (_product: any) => _product.id !== product.id
              ),
              orders: oldBasket.orders.filter(
                (_product: any) => _product.product_id !== product.id
              ),
            }));
          }

          set((oldBasket: any) => ({
            invoice: {
              totalPrice: oldBasket.invoice.totalPrice - off,
            },
            products: oldBasket.products.map((_product: any) => {
              if (_product.id === product.id) {
                return {
                  ...product,
                  quantity: _product.quantity - 1,
                };
              }
              return _product;
            }),
            orders: oldBasket.orders.map((_product: any) => {
              if (_product.product_id === product.id) {
                return {
                  product_id: product.id,
                  quantity: _product.quantity - 1,
                };
              }
              return _product;
            }),
          }));
        },
        removeAll: () => {
          set(() => ({
            products: [],
            orders: [],
            invoice: {
              totalPrice: 0,
            },
          }));
        },
      },
    }),
    {
      name: "basket_items",
      partialize: (state: any) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["action"].includes(key))
        ),
    }
  )
);
export default useBasket;
