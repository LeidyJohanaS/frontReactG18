import http from "./http-config";
var module = "user";
const getAll = () => {
  return http.get("/" + module + "/all");
};

const get = (id) => {
  return http.get(`/${module}/${id}`);
};

const create = (data) => {
  return http.post(`/${module}/new`, data);
};

const update = (data) => {
  return http.put(`/${module}/update`, data);
};

const remove = (id) => {
  return http.delete(`/${module}/${id}`);
};
const validateEmail =(email)=>{
    return http.get(`/${module}/emailexist/${email}`)
}

const login = (email,password)=>{
    return http.get(`/${module}/${email}/${password}`)
}
const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove,
  validateEmail,
  login
};
export default exportedObject;
