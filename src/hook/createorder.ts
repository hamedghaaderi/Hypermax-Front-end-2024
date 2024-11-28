import baseURL from "../api/config";
import { useMutation } from "@tanstack/react-query";

const useCreateOrder = () => {
  const token = localStorage.getItem("token") ?? "";
  let accessToken: any;
  if (token) {
    accessToken = JSON.parse(token);
  }
  const { data, mutateAsync, status } = useMutation({
    mutationKey: ["create_order"],
    mutationFn: async (data) => {
      return baseURL
        .post("create_order/", data, {
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
        })
        .then((res) => res);
    },
  });

  return {
    data,
    mutateAsync,
    status
  };
};

export default useCreateOrder;
