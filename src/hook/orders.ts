import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useOrders = () => {
  const token = localStorage.getItem("token") ?? "";
  let accessToken: any;
  if (token) {
    accessToken = JSON.parse(token);
  }

  const { status, data } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return baseURL
        .get("orders/", {
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
        })
        .then((res) => res);
    },
  });
  return { status, data };
};

export default useOrders;
