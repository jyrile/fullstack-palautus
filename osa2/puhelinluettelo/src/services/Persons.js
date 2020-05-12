import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const remove = (personId) => {
  const request = axios.delete(`${baseUrl}/${personId}`).catch((error) => {
    console.log("something went wrong", error);
  });

  return request.then((response) => response);
};

const update = (personId, newPerson) => {
  const request = axios.put(`${baseUrl}/${personId}`, newPerson);
  return request.then((response) => response.data);
};

export default { getAll, create, remove, update };
