import axios from "axios";

const url = "http://localhost:3000";

const Api = axios.create({
  baseURL: url,
});

export const getAllCar = async () => {
  const response = await Api.get("/data");
  return Promise.resolve(response.data);
};
