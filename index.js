document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const suggestions = document.getElementById("suggestions");

  const rules = ["OB", "バンカー", "暫定球", "ロストボール", "杭",
                 "ティー", "フェアウェイ", "ラフ", "グリーン", "ペナルティ",
                 "プレー順", "道具", "カート"];

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestions.innerHTML = "";
    if (query) {
      const matches = rules.filter(r => r.toLowerCase().includes(query));
      matches.forEach(match => {
        const li = document.createElement("li");
        li.textContent = match;
        li.addEventListener("click", () => {
          input.value = match;
          suggestions.innerHTML = "";
        });
        suggestions.appendChild(li);
      });
    }
  });
});
