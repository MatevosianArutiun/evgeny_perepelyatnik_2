export const showLoading = () => {
  let $main = document.querySelector("#main");
  const displayNone = () => {
    $main.classList.remove("main");
  };
  setTimeout(displayNone, 3350);

  let $loader = document.querySelector(".loader");

  window.setTimeout(function () {
    $loader.classList.add("loader--noactive");
    $loader.classList.remove("loader");
  }, 3350);
};
