import http from './http-config';
var module="order"
const getAll = ()=> {
    return http.get("/"+module+"/all");
  }

  const get = (id)=> {
    return http.get(`/${module}/${id}`);
  }

  const create = (data)=> {
    return http.post(`/${order}/new`, data);
  }

  const update = (data) =>{
    return http.put(`/${module}/update`, data);
  }

  const remove = (id)=> {
    return http.delete(`/${module}/${id}`);
  }

  const findByZone = (zone) => {
    return http.get(`/${module}/${zone}`);
  }
  
  const exportedObject = {
    getAll,
    get,
    create,
    update,
    remove,
    findByZone
  }
  export default exportedObject;