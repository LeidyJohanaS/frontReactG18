import http from './http-config';
var module="chocolate"

const getAll = ()=> {
  return http.get("/"+module+"/all");
}

const get = (reference)=> {
  return http.get(`/${module}/${reference}`);
}

const create = (data)=> {
  return http.post(`/${module}/new`, data);
}

const update = (data) =>{
  return http.put(`/${module}/update`, data);
}

const remove = (reference)=> {
  return http.delete(`/${module}/${reference}`);
}

const findByPrice = (price) => {
  return http.get(`/${module}?precio=${price}`);
}

const findByCategory = (category) => {
    return http.get(`/${module}?categoria=${category}`);
}

const findByName = (name) => {
    return http.get(`/${module}?nombre=${name}`);
}
const getAllCategories = ()=>{
  return http.get(`/${module}/categorias`);
}
const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove,
  findByPrice,
  findByCategory,
  findByName,
  getAllCategories
}
export default exportedObject;

  
