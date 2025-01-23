import { Slider } from "./slider.js";
setTimeout(() => {
    const close = document.getElementById("close");
    const modal = document.getElementById("window");
    const open = document.querySelectorAll(".description__img");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    console.log(close);

    console.log(123);
    let gallery = "";
    console.log(open);

    for (let i = 0; i < open.length; i++) {
        open[i].addEventListener("click", (e) => {
            gallery = new Slider({
                name: "вапа",
                gap: 0,
                loop: true,
            });
            modal.style.display = "block";
            document.body.style.overflowY = "hidden";
        });
    }
    document.addEventListener("keydown", (event) => {
        if (event.code == "Escape") {
            modal.style.display = "none";
            document.body.style.overflowY = "scroll";
        }
        if (event.code == "ArrowLeft") {
            gallery.slide_left();
        }
        if (event.code == "ArrowRight") {
            gallery.slide_right();
        }
    });
    close.addEventListener("click", (e) => {
        modal.style.display = "none";
        document.body.style.overflowY = "scroll";
    });
    next.addEventListener("click", (e) => {
        gallery.slide_right();
    });
    prev.addEventListener("click", (e) => {
        gallery.slide_left();
    });
}, 700);
