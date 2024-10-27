const Mobile_Nav_Bar = document.querySelector(".Phone_menu");
const Mobile_Nav_Menu = document.querySelector(".Mobile_Nav");

function Open_Menu(event){
    event.stopPropagation();    //Stop Bubbling? inconsisntent closing and opening More research

    Mobile_Nav_Menu.classList.toggle("active");

    if (Mobile_Nav_Menu.classList.contains("active")) {
        Mobile_Nav_Bar.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';  //Change to Close icon
    }else{
        Mobile_Nav_Bar.innerHTML = '<i class="fa-solid fa-bars"></i>';      //Change back to Hamburger icon
    }
}

document.addEventListener("click", (event) => {

    if (!Mobile_Nav_Menu.contains(event.target) && !Mobile_Nav_Bar.contains(event.target)) {
        Mobile_Nav_Menu.classList.remove("active");
        Mobile_Nav_Bar.innerHTML = '<i class="fa-solid fa-bars"></i>'; //Sets back Hamburger icon
    }
});