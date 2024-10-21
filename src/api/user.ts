import BaseURL from "./config";

const getUserInfo: (token: string | null) => any = async (token) => {
  const data = BaseURL.get("user/info/", {
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res);

  return data;
};

export default getUserInfo;
