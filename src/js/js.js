import { Slider } from "./slider.js";
console.log(1234444);

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slider = new Slider({
    // name:'вапа',
    gap: 0,
    loop: false,
});

next.addEventListener("click", () => {
    console.log(123);

    slider.slide_right();
});
prev.addEventListener("click", () => {
    console.log(123);
    slider.slide_left();
});
