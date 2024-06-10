import axios from "axios";
const baseUrl = "http://localhost:3001/api";

const getAll = () => {
  return axios.get(`${baseUrl}/persons`);
};

const create = (newObject) => {
  return axios.post(`${baseUrl}/persons`, newObject);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/persons/${id}`);
};

const update = (id, updatedObject) => {
  return axios.put(`${baseUrl}/${id}`, updatedObject);
};

export default {
  getAll: getAll,
  create: create,
  remove: remove,
  update: update,
};
