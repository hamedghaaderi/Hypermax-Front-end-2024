import baseURL from "../api/config";
import { useMutation } from "@tanstack/react-query";

const useUpdateUser = () => {
  const token = localStorage.getItem("token") ?? "";
  let accessToken: any;
  if (token) {
    accessToken = JSON.parse(token);
  }
  const { mutateAsync, status, data } = useMutation({
    mutationKey: ["update-user"],
    mutationFn: async (data) => {
      return baseURL
        .patch("user/update/", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${accessToken}`,
          },
        })
        .then((res) => res)
        .catch((error) => error.response);
    },
  });

  return {
    status,
    mutateAsync,
    data,
  };
};

export default useUpdateUser;
