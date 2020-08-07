import axios from "axios";

const apiClient = axios.create({
  // baseURL: `http://localhost:3000`,
  baseURL: `https://api.jsonbin.io/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "secret-key": "$2b$10$9wES/sgT03yQcQYjzuoCb.QKxzdPfbmri1BsmV.clil6FDEjPJXIe"
  }
});

export default {
  getData(id) {
    return apiClient.get(id);
  }
};
