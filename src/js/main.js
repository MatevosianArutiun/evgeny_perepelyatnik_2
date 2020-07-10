"use strict";

import { showLoading } from "./scripts/preloader";
import { changeTitle } from "./scripts/title";

document.addEventListener("DOMContentLoaded", () => {
  showLoading();
  changeTitle();
  setInterval(changeTitle, 12000);
});

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
var myFullpage = new fullpage("#fullpage", {
  navigation: true,

  // loopBottom: true,
});
