import axios from "axios";

const BaseURL = axios.create({
  baseURL: "http://hypermax.chbk.app/",
});

export default BaseURL;