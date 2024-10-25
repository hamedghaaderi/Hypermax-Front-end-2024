import baseURL from "../api/config";
import { useMutation } from "@tanstack/react-query";

const useUpdateUser = () => {
  const token = localStorage.getItem("token") ?? "";
  const accessToken = JSON.parse(token);
  const { mutateAsync, status } = useMutation({
    mutationKey: ["update-user"],
    mutationFn: async (data) => {
      return baseURL
        .patch("user/update/", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${accessToken}`,
          },
        })
        .then((res) => res);
    },
  });

  return {
    status,
    mutateAsync,
  };
};

export default useUpdateUser;
