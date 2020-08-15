import axios from "axios";

const apiClient = axios.create({
  // baseURL: `http://localhost:3000`,
  baseURL: `https://api.jsonbin.io/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "secret-key": "$2b$10$R0nesHzmEQ.EahBk41qoM.brEN52rEnjvyT4ex6SrLq2zNsPcZaE."
  }
});

export default {
  getData(id) {
    return apiClient.get(id);
  }
};
