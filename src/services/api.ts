import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_KEY,
  },
});

// site que tem api: https://rawg.io/
