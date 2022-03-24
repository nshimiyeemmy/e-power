import axios from "axios";

export const domain =""


const http = axios.create ({
  baseURL: `${domain}/api`,
  headers: {'Content-Type': 'application/json'},
});


export default http;