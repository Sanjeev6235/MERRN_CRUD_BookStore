import axios from "axios";

export const baseBookUrl = axios.create({
    baseURL: "http://merrn-crud-book-store.vercel.app"
})