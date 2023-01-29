
let nombre = document.getElementById('cliente')
let correo = document.getElementById('correo')
let direccion = document.getElementById('direccion')
let telefono = document.getElementById('telefono')
let error = document.getElementById('error')





function enviarFormulario(){
    console.log('Enviando...')

    const mensajesError = []
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre')
    }
    if(correo.value === null || correo.value === ''){
        mensajesError.push('Ingresa tu correo')
    }
    if(direccion === null || direccion === ''){
        mensajesError.push('Ingresa tu dirección')
    }
    if(telefono === null || telefono === ''){
        mensajesError.push('Ingresa tu teléfono')
    }
   error.innerHTML = mensajesError.join (', ')

    return false
}