import axios from "axios";

axios.defaults.baseURL = "https://648ca5e48620b8bae7ed3008.mockapi.io";

export const getAllData = async (page = 1, limit = 8) => {
  const params = {
    params: {
      limit,
      page,
    },
  };

  const { data } = await axios.get("/advert", params);

  return data;
};
