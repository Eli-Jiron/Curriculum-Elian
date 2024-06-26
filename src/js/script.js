let contador = document.getElementById('contador');
let like = document.getElementById('like');
let dislike = document.getElementById('dislike');

let correo = document.getElementById("correo");
let comentario = document.getElementById("comentario");
let enviar = document.getElementById("enviar");
let mostrar = document.getElementById("mostrar");

let valiCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

like.addEventListener('click', function () {
    contador.innerHTML = parseInt(contador.innerHTML)+1
});

dislike.addEventListener('click', function () {
    if (contador.innerHTML != 0) {
        contador.innerHTML = parseInt(contador.innerHTML)-1
    }
});

enviar.addEventListener('click', function () {
    if (correo.value == "" || comentario.value == "") {
        alert('Debe llenar todos los campos');
    } else {
        if (!valiCorreo.test(correo.value)) {
            alert('Ingrese un correo valido');
          } else {
            const nuevoDiv = document.createElement("div");
            const nuevoDiv2 = document.createElement("div");

            nuevoDiv.innerHTML = "Correo: " + correo.value;
            nuevoDiv2.innerHTML = "Comentario: " + comentario.value;

            nuevoDiv.classList.add('comentarios');

            mostrar.appendChild(nuevoDiv);
            mostrar.appendChild(nuevoDiv2);
          }
    }
});