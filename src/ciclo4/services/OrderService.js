import http from "./http-config";
// var module = "order";
const getAll = () => {
  return http.get(`/order/all`);
};

const get = (id) => {
  return http.get(`/order/${id}`);
};

const create = (data) => {
  return http.post(`/order/new`, data);
};

const update = (data) => {
  return http.put(`/order/update`, data);
};

const remove = (id) => {
  return http.delete(`/order/${id}`);
};

const findByZone = (zone) => {
  return http.get(`/order/${zone}`);
};

const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove,
  findByZone,
};
export default exportedObject;
