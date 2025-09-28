const rules = [
  "OB",
  "バンカー",
  "池（ペナルティエリア）",
  "プレーファスト",
  "ティーイングエリア",
  "フェアウェイ",
  "ラフ",
  "グリーン",
  "ペナルティエリア"
];

function showSuggestions(value) {
  const list = document.getElementById("suggestions");
  list.innerHTML = "";
  if (!value) return;
  const filtered = rules.filter(rule => rule.includes(value));
  filtered.forEach(rule => {
    const li = document.createElement("li");
    li.textContent = rule;
    list.appendChild(li);
  });
}
