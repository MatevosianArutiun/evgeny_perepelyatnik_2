export const changeTitle = () => {
  const x = () => {
    setTimeout(() => {
      const $headerTitle = document.querySelector("#content-title");

      if (document.body.clientWidth > 1300) {
        $headerTitle.textContent = "Yevhenii Perepeliatnyk";
        setTimeout(() => {
          $headerTitle.textContent = "Videographer";
        }, 4000);
        setTimeout(() => {
          $headerTitle.textContent = "Photographer";
        }, 8000);
      }
    }, 3600);
  };
  x();
};
