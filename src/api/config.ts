import axios from "axios";

const BaseURL = axios.create({
  baseURL: "http://hypermax.chabk.ir/",
});

export default BaseURL;