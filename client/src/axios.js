import axios from "axios";

export const baseBookUrl = axios.create({
    baseURL: "http://localhost:8000/book"
})