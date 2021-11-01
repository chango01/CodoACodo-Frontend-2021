window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const nombre = document.getElementById('nombre')
    const telefono = document.getElementById('telefono')
    const email = document.getElementById('email')
    const consulta = document.getElementById('consulta')
   

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el nombre
        const nombreValor = nombre.value.trim()
        const telefonoValor = telefono.value.trim()
        const emailValor = email.value.trim()
        const consultaValor = consulta.value.trim() 

     
        //validando campos

        if(!nombreValor){
            //console.log('CAMPO VACIO')
            validaFalla(nombre, 'Complete el espacio')
        }else{
            validaOk(nombre)
        }

        if(!telefonoValor){
            //console.log('CAMPO VACIO')
            validaFalla(telefono, 'Complete el espacio')
        }else if(!validaTelefono(telefonoValor)) {
            validaFalla(telefono,'Ingrese un número telefónico')
        }else{
            validaOk(telefono)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Complete el espacio')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }

        if(!consultaValor){
            //console.log('CAMPO VACIO')
            validaFalla(consulta, 'Complete el espacio')
        }else{
            validaOk(consulta)
        }
    
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaTelefono = (telefono) => {
        return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(telefono);
    }
    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})
 