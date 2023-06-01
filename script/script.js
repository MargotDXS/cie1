console.log("connecté");

// burger menu

const iconBurgerMenu = document.querySelector("#burgerMenu");
console.log(iconBurgerMenu);

const  modal = document.querySelector(".modal");
console.log(modal);

iconBurgerMenu.addEventListener("click", function() {
    console.log("icone cliquée");
    modal.classList.toggle("changeModal")
})