import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import CartPageItem from "../components/products/cartpageitem";
import StaticSection from "../components/staticsection";
import useBasket from "../store/basket";

const CartPage = () => {
  const { products, invoice } = useBasket((state: any) => state);
  const { removeAll } = useBasket((state: any) => state.action);

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <article className="max-w-whole m-auto desk:flex desk:w-90% desklg:w-full desk:flex-row p-5 desk:p-7 relative desk:px-0">
          {products.length !== 0 && (
            <aside className="rounded-2xl bg-white mr-5 hidden desk:block w-1/3 h-fit sticky top-213px">
              <div className="flex flex-col items-end justify-between text-text pb-4 border-b-2 border-border py-5 px-7">
                <div className="flex flex-row-reverse w-full items-center justify-between pb-4 border-b border-border">
                  <span>جمع جزء</span>
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-1">{invoice.totalPrice}</span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
                <div className="flex flex-row-reverse w-full items-center justify-between py-4 border-b border-border">
                  <span>هزینه ارسال</span>
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-1">0</span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
                <div className="flex flex-row-reverse w-full items-center justify-between pt-4">
                  <span>تخفیف</span>
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-1">0</span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
              </div>
              <div className="pb-6 px-7 pt-5">
                <div className="pb text-primary flex flex-row-reverse w-full items-center justify-between mb-7">
                  <span className="text-xl">جمع نهایی</span>
                  <div className="text-xl flex flex-row-reverse items-center">
                    <span className="ml-1">1000000000</span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
                <button className="text-white text-lg bg-primary rounded-xl p-2 w-full">
                  پرداخت
                </button>
              </div>
            </aside>
          )}
          <section
            className={products.length == 0 ? "desk:w-full" : "desk:w-2/3"}
          >
            {products.length == 0 && (
              <div className="py-5 px-7 rounded-2xl bg-white">
                <div
                  className={
                    products.length !== 0
                      ? "w-full flex items-center justify-between pb-3"
                      : "w-full text-right pb-3"
                  }
                >
                  {products.length !== 0 && (
                    <button
                      onClick={() => removeAll()}
                      className="flex items-center"
                    >
                      <i className="fa-solid fa-trash-can text-red text-sm tablet:text-base"></i>
                      <span className="text-text ml-2 text-xs tablet:text-sm">
                        حذف سبد
                      </span>
                    </button>
                  )}
                  <span className="text-text text-xl tablet:text-2xl">
                    سبد خرید
                  </span>
                </div>
                <div className="flex items-center justify-center p-20 text-text desk:text-lg">
                  سبد خرید شما خالی است
                </div>
              </div>
            )}
            {products.length !== 0 && (
              <div className="py-5 rounded-2xl bg-white">
                <div className="w-full flex items-center justify-between pb-6 px-7 border-b-2 border-border">
                  <button
                    onClick={() => removeAll()}
                    className="flex items-center"
                  >
                    <i className="fa-solid fa-trash-can text-red text-sm tablet:text-base"></i>
                    <span className="text-text ml-2 text-xs tablet:text-sm">
                      حذف سبد
                    </span>
                  </button>
                  <span className="text-text text-xl tablet:text-2xl">
                    سبد خرید
                  </span>
                </div>
                {products.map((_Product: any) => {
                  return <CartPageItem key={_Product.id} {..._Product} />;
                })}
              </div>
            )}
            <section></section>
          </section>
        </article>
        {products.length !== 0 && (
          <section className="rounded-2xl bg-white m-5 mt-0 desk:hidden">
            <div className="flex flex-col items-end justify-between text-text pb-4 border-b-2 border-border py-5 px-7">
              <div className="flex flex-row-reverse w-full items-center justify-between pb-4 border-b border-border">
                <span>جمع جزء</span>
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-1">{invoice.totalPrice}</span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
              <div className="flex flex-row-reverse w-full items-center justify-between py-4 border-b border-border">
                <span>هزینه ارسال</span>
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-1">0</span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
              <div className="flex flex-row-reverse w-full items-center justify-between pt-4">
                <span>تخفیف</span>
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-1">0</span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
            </div>
            <div className="pb-6 px-7 pt-5">
              <div className="pb text-primary flex flex-row-reverse w-full items-center justify-between mb-5">
                <span className="text-xl">جمع نهایی</span>
                <div className="text-xl flex flex-row-reverse items-center">
                  <span className="ml-1">1000000000</span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
              <button className="text-white text-lg bg-primary rounded-xl p-2 w-full">
                پرداخت
              </button>
            </div>
          </section>
        )}
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default CartPage;
