document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  if (searchBox) {
    searchBox.addEventListener("input", (e) => {
      console.log("検索候補:", e.target.value);
    });
  }
});
