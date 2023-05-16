import axios from "axios";

export const usersApi = axios.create({
  baseURL: "https://reqres.in/api",
});

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
})
