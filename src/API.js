import axios from "axios";

const API = axios.create({
  baseURL: `https://ven10-node-app.herokuapp.com/api/v1`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default API;
