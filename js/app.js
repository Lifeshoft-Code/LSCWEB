var ventanaForm = document.getElementById('formulario');
var btnAbrirForm = document.getElementById('btn-open-form');
var btnCerrarForm = document.getElementById("btn-close-form");

btnAbrirForm.addEventListener('click', function(){
    ventanaForm.classList.remove('active');
});


btnCerrarForm.addEventListener('click', function(){
    ventanaForm.classList.add('active');
    
});







