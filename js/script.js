document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuItems = document.getElementById("menu-items");

    menuToggle.addEventListener("click", function () {
        menuItems.classList.toggle("show");
    });
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
