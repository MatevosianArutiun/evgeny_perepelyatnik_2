export const fullPage = () => {
  const myFullpage = new fullpage("#fullpage", {
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
      "contact",
    ],

    // scrollHorizontally: true,
    // controlArrows: false,
    // loopBottom: true,
  });
};
