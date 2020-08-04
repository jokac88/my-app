import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/jokac88/my-app`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getPersonalInfo() {
    return apiClient.get("/personalInfo");
  },
  getAboutMe() {
    return apiClient.get("/aboutMe");
  }
};
