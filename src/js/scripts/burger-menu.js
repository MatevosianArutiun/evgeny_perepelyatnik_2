export const showBurgerMenu = () => {
  const $burgerNavigation = document.querySelector("#burger-menu");
  const $menuList = document.querySelectorAll(".menu__list");
  const $menuItem = document.querySelectorAll(".menu__item");
  const $menuLink = document.querySelectorAll(".menu__link");
  const $burgerBtn = document.querySelector("#burger-btn");
  //   const $hfpNav = document.querySelector("#fp-nav");

  // window.addEventListener("resize", function (event) {
  //   if (document.body.clientWidth > 1024) {
  //     $burgerNavigation.classList.remove("burger-menu-noactive");
  //   } else {
  //     $burgerNavigation.classList.add("burger-menu-noactive");
  //   }
  // });

  const changeClassBurgerMenu = () => {
    $burgerNavigation.classList.toggle("burger-menu");
    $menuList.forEach((el) => {
      el.classList.toggle("burger-menu__list");
    });
    $menuItem.forEach((el) => {
      el.classList.toggle("burger-menu__item");
    });
    $menuLink.forEach((el) => {
      el.classList.toggle("burger-menu__link");
    });
  };

  $burgerBtn.addEventListener("click", function (event) {
    changeClassBurgerMenu();
  });
  $burgerNavigation.addEventListener("click", function (event) {
    if ($burgerNavigation.classList.contains("burger-menu")) {
      changeClassBurgerMenu();
    }
  });
};
