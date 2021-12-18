function validarFormatoCorreo(correo) {
  if (
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo)
  ) {
    return true;
  }
  return false;
}

function validaesVacio(dato) {
  return !dato.trim().length;
}

function isNumeric(numstr) {
  if (numstr.match(/^\d+$/)) {
    return true;
  } else {
    return false;
  }
}

function getJustDate(fullDate) {
  var day = new Date(fullDate);
  var dd = String(day.getDate()).padStart(2, "0");
  var mm = String(day.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = day.getFullYear();
  return  yyyy+"-" +mm + "-"+ dd;
}

function getMonthByDate(date){
  return getJustDate(date).split("-")[1]
}
function validarCamposUsuario(obj,type){
  if(obj.identification===""||
  obj.name===""||
  obj.birthDay===""||
  obj.address===""||
  obj.cellPhone===""||
  obj.email===""||
  obj.password===""||
  obj.zone===""||
  obj.type===""){
    return false;
  }
  if(type!=="create"){
    if(!obj.id){
      return false
    }
  }
  return true;
}

const exportObj = {
  validarFormatoCorreo,
  validaesVacio,
  isNumeric,
  getJustDate,
  validarCamposUsuario,
  getMonthByDate
};

export default exportObj;
