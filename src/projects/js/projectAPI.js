import axios from "axios";
import Project from "../ts/Project";

const baseUrl = "http://localhost:4000";

export const projectAPI = {
  async getProjects(page = 1, limit = 10) {
    return axios
      .get(`${baseUrl}/projects?_page=${page}&_limit=${limit}_sort=name`)
      .then((res) => {
        return res.data.map((p) => {
          return new Project(p);
        });
      })
      .catch((error) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },
  async updateProject(project) {
    const res = await axios.put(`${baseUrl}/projects`, { project });
    console.log(res);
    return res.data;
  },
  async find(id) {
    return axios
      .get(`${baseUrl}/projects/${id}`)
      .then((res) => {
        return new Project(res.data);
      })
      .catch((error) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },
};
