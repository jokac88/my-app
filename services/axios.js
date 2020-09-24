import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "secret-key":
      "$2b$10$R0nesHzmEQ.EahBk41qoM.brEN52rEnjvyT4ex6SrLq2zNsPcZaE.",
  },
});

export default {
  getData(lang) {
    return apiClient.get(lang);
  },
};
