import axios from "axios";

const baseUrl = axios.create({baseURL: "https://jsonplaceholder.typicode.com/"})
export default baseUrl; 