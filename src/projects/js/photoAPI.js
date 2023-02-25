import axios from "axios";

const baseUrl = "http://localhost:3000";

export const photoAPI = {
  async getAllPhoto(page = 1, limit = 10) {
    return axios
      .get(`${baseUrl}/photos?_page=${page}&_limit=${limit}`)
      .then((res) => {
        return res.data;
      });
  },
  async addPhoto(photo) {
    const res = await axios.post(`${baseUrl}/photos`, { photo });
    console.log(res);
    return res.data;
  },
  deletePhoto() {},
  updatePhoto() {},
};
