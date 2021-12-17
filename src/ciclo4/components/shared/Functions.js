function validarFormatoCorreo(correo){
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo)){
        return true
    }
    return false;

}

function validaesVacio(dato){
    return !dato.trim().length;
}

function isNumeric(numstr)
{
    if (numstr.match(/^\d+$/ ) ) {
        return true;
    }
    else
    {
        return false;
    }
}


const exportObj={
    validarFormatoCorreo,
    validaesVacio,
    isNumeric
}

export default exportObj;