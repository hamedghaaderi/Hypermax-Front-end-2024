import axios from "axios";

const categoriesBaseURL = axios.create({
  baseURL: "https://hyper-max.ir/shop",
});

export default categoriesBaseURL;