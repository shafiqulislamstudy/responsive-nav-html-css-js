const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click",navFunction);
function navFunction(){
    navToggler.classList.toggle("active");
    const menuMain = document.querySelector(".menu");
    menuMain.classList.toggle("open");
}