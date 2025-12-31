import axios from "axios";

export const baseBookUrl = axios.create({
    baseURL: "https://merrn-crud-book-store.vercel.app"
})