import baseURL from "../api/config";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  const { data, mutateAsync, status } = useMutation({
    mutationKey: ["phone_number", "OTP"],
    mutationFn: async (data) => {
      return baseURL
        .post("login/", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => res);
    },
  });

  return {
    data,
    mutateAsync,
    status,
  };
};

export default useLogin;
