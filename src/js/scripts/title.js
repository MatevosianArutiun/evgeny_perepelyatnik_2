export const changeTitle = () => {
  setTimeout(() => {
    let $headerTitle = document.querySelector("#content-title");

    $headerTitle.textContent = "Yevhenii Perepeliatnyk";
    setTimeout(() => {
      $headerTitle.textContent = "Videographer";
    }, 4000);
    setTimeout(() => {
      $headerTitle.textContent = "Photographer";
    }, 8000);
  }, 3600);
};
