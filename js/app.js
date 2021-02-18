var ventanaForm = document.getElementById('formulario');
var btnAbrirForm = document.getElementById('btn-open-form');
var btnCerrarForm = document.getElementById("btn-close-form");

btnAbrirForm.addEventListener('click', function(){
    ventanaForm.classList.remove('active');
});


btnCerrarForm.addEventListener('click', function(){
    ventanaForm.classList.add('active');
    
});
var btnAbrirMenu = document.getElementById('header-item_ico-menu');
var btnCerrarMenu = document.getElementById('btn-close-menu');
var menu = document.getElementById('main-menu');

btnAbrirMenu.addEventListener('click', function(){
    menu.classList.remove('close-menu');
    // console.log("click");
})
btnCerrarMenu.addEventListener('click', function(){
    menu.classList.add('close-menu');
    
    
});
//para que el usuario no pueda acceder al menu
document.oncontextmenu = function(){return false}







