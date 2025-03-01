//--------------------------------------------------------------------------------
//  Para que muestre el menu del desplazamiento
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-desplazamiento");
    const menuItems = document.querySelector(".menu-items");

    menuButton.addEventListener("click", function () {
        menuItems.classList.toggle("show");
    });
});


//--------------------------------------------------------------------------------
//  Cerrar el menu del desplazamiento fuera de 
window.addEventListener('click', function(event) {
    if (!event.target.matches('.menu-desplazamiento') && !event.target.closest('.menu')) {
        menuItems.classList.remove('show');
    }
});

//--------------------------------------------------------------------------------
//  Mandar a traer los items del menu del desplazamiento
const menuButton = document.getElementById('menu-desplazamien');
const menuItems = document.getElementById('menu-items');

menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    menuItems.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!menuItems.contains(event.target) && !menuButton.contains(event.target)) {
        menuItems.classList.remove('show');
    }
});



