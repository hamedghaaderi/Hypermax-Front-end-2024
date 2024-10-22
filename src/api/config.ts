import axios from "axios";

const BaseURL = axios.create({
  baseURL: "https://hypermax.chbk.app/",
});

export default BaseURL;