export const fullPage = () => {
  const myFullpage = new fullpage("#fullpage", {
    // fitToSectionDelay: 50,
    navigation: true,
    slidesNavigation: true,
    scrollBar: true,
    scrollingSpeed: 800,
    navigationTooltips: [
      "header",
      "about",
      "gallery",
      "portrait",
      "imagery",
      "video",
      "lovestory",
      "portfolio",
      "contact",
      "footer",
    ],
    // scrollOverflow: true,
    // normalScrollElements: "#element, .element",

    // scrollHorizontally: true,
    // controlArrows: false,
    // loopBottom: true,
  });
};
