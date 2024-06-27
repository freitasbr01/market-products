import axios from "axios";

export const api = axios.create({
  baseURL: "https://market-products.onrender.com",
  // baseURL: 'http://localhost:3333',
});