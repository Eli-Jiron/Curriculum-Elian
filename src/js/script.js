let contador = document.getElementById('contador');
let like = document.getElementById('like');
let dislike = document.getElementById('dislike');

like.addEventListener('click', function () {
    contador.innerHTML = parseInt(contador.innerHTML)+1
});

dislike.addEventListener('click', function () {
    if (contador.innerHTML != 0) {
        contador.innerHTML = parseInt(contador.innerHTML)-1
    }
});