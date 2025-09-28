document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("ruleSearch");
  const rulesList = document.getElementById("rulesList");

  if (searchBox) {
    searchBox.addEventListener("input", () => {
      const query = searchBox.value.toLowerCase();
      const items = rulesList.getElementsByTagName("li");
      for (let item of items) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "" : "none";
      }
    });
  }
});
