import axios from "axios";

const intstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default intstance;
