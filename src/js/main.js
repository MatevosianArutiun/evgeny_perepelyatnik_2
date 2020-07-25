"use strict";

import { showLoading } from "./scripts/preloader";
import { scroll } from "./scripts/scroll";
import { changeTitle } from "./scripts/title";
import { fullPage } from "./scripts/fullpage";
import { showMap } from "./scripts/map";
import { parallax } from "./scripts/parallax";

document.addEventListener("DOMContentLoaded", () => {
  showLoading();
  scroll();
  changeTitle();
  setInterval(changeTitle, 12000);
  fullPage();
  showMap();
  parallax();
});

// document.addEventListener("DOMContentLoaded", () => {
//   const click = () => {
//     let menu = document.querySelector(".menu");

//     menu.addEventListener("click", function (event) {
//       let target = event.target;
//       if (
//         target.className !== "menu__link" &&
//         target.className !== "menu__item"
//       )
//         return;
//       target.addEventListener("click", function () {
//         document.getElementById("audio").play();
//       });
//     });
//   };
//   click();
// });

// let el = document.querySelector(".navigation");

// window.addEventListener("scroll", toggleClassOnScroll.bind(el, 700));

// function toggleClassOnScroll(pxAmount) {
//   let scrollTop =
//     window.pageYOffset !== undefined
//       ? window.pageYOffset
//       : (document.documentElement || document.body.parentNode || document.body)
//           .scrollTop;
//   // console.log(scrollTop);
//   if (scrollTop > pxAmount) {
//     this.classList.add("navigation--active");
//   } else {
//     this.classList.remove("navigation--active");
//   }
// }

// window.onscroll = function () {
//   let posTop =
//     window.pageYOffset !== undefined
//       ? window.pageYOffset
//       : (document.documentElement || document.body.parentNode || document.body)
//           .scrollTop;
//   console.log(posTop);
// };

// let el = document.querySelector(".navigation");
// let el1 = document.querySelector(".section-about");
// window.addEventListener("scroll", toggleClassOnScroll.bind(el, 1));

// function toggleClassOnScroll(pxAmount) {
//   let scrollTop =
//     window.pageYOffset !== undefined
//       ? window.pageYOffset
//       : (document.documentElement || document.body.parentNode || document.body)
//           .scrollTop;
//   // console.log(scrollTop);
//   if (scrollTop > pxAmount) {
//     el1.scrollIntoView();
//   } else {
//     this.classList.remove("navigation--active");
//   }
// }
