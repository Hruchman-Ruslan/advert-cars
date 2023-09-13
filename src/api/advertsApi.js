import axios from "axios";

axios.defaults.baseURL = "https://648ca5e48620b8bae7ed3008.mockapi.io";

export const getAllData = async () => {
  const { data } = await axios.get("/advert");

  return data;
};
