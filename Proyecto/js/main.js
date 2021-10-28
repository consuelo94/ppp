const EnvioFormulario = (e) => {
    e.preventDefault();
    console.log('Estoy enviandome');
    let inputNombre = document.querySelector("#txtNombre");
    if(inputNombre.value ==''){
        alert('No completaste el nombre');
        return false;
    }
    let inputEmail = document.querySelector("#txtEmail");
    if(inputEmail.value == ''){
        alert('No completaste el email');
        return false
    }
    let descripcion = document.querySelector("#txtMensaje");
    if(descripcion.value == ''){
        alert('No completaste tu consulta');
        return false
    }
}

const toggle = (element) => {
    let items = document.getElementsByClassName('item');
    let a = element.querySelectorAll('a');
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')){
            items[i].classList.remove('active');
            a[0].innerHTML = `<i class='fas fa-bars'></i>H`;
        }else{
            items[i].classList.add('active');
            a[0].innerHTML = `<i class='fas fa-times'></i>X`;
        }         
    }
}