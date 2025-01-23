const open = document.getElementById("contacts__button");
const win = document.getElementById("window");
const close = document.getElementById("close");
const body = document.querySelector("body");
console.log("ghjkgjk");
open.addEventListener("click", () => {
    win.style.display = "flex";
    body.style.overflowY = "hidden";
});
close.addEventListener("click", () => {
    win.style.display = "none";
    body.style.overflowY = "scroll";
});
