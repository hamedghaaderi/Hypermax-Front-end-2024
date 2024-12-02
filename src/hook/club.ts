import baseURL from "../api/config";
import { useMutation } from "@tanstack/react-query";

const useClub = () => {
  const { mutate, status } = useMutation({
    mutationKey: ["club"],
    mutationFn: async (data) => {
      return baseURL
        .post("club/create/", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => res);
    },
  });

  return {
    mutate,
    status
  };
};

export default useClub;
