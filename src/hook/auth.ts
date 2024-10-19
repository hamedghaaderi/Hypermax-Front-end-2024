import baseURL from "../api/config";
import { useMutation } from "@tanstack/react-query";

const useAuth = () => {
  const { data, mutate, error } = useMutation({
    mutationKey: ["phone_number"],
    mutationFn: async (data) => {
      return baseURL
        .post("auth/", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => res);
    },
  });

  return {
    data,
    mutate,
    error,
  };
};

export default useAuth;
