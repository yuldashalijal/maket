"use strict";

//!___1-carusel

let list = document.querySelector(".carusel-img"),
  frame_img = document.querySelectorAll(".Frame"),
  left = document.querySelector("#left"),
  right = document.querySelector("#right");

let index = 0;

function slider() {
  if (index > frame_img.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = frame_img.length - 1;
  }

  list.style.transform = `translateX(${-index * 1230}px)`;
}

let play = setInterval(() => {
  index++;
  slider();
}, 5000);

right.addEventListener("click", () => {
  index++;
  slider();
  clearInterval(play);
});
left.addEventListener("click", () => {
  index--;
  slider();
  clearInterval(play);
});
