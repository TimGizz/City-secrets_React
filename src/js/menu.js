const menu_icon = document.getElementById("menu_icon");
const menu = document.querySelector(".menu");
menu.style.display = "none";
console.log(menu);

menu_icon.addEventListener("click", () => {
    console.log(menu.style.display == "none");

    if (menu.style.display == "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});
