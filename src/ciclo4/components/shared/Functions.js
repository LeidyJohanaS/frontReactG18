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

const exportObj = {
  validarFormatoCorreo,
  validaesVacio,
  isNumeric,
  getJustDate,
};

export default exportObj;
