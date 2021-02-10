form = document.getElementById('form');
var btn = document.getElementById("btn-submit").addEventListener('click', registrar);


function registrar(){

    var userName = document.getElementById('userName');
    var userLastName = document.getElementById('userLastName');
    
    localStorage.setItem('name', userName.value);
    localStorage.setItem('LastName', userLastName.value);
      
    location.href = "index.html";
}    


