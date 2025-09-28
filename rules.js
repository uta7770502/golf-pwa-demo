document.addEventListener("DOMContentLoaded", () => {
  fetch("data/rules.json")
    .then(res => res.json())
    .then(data => {
      const rulesList = document.getElementById("rulesList");
      const searchBox = document.getElementById("searchRules");

      function renderRules(filter = "") {
        rulesList.innerHTML = "";
        let filtered = data.filter(r => r.title.includes(filter));
        filtered.forEach(rule => {
          const div = document.createElement("div");
          div.className = "rule-item";
          div.innerHTML = `<h3>${rule.title}</h3><p>${rule.desc}</p>`;
          rulesList.appendChild(div);
        });
      }

      renderRules();

      searchBox.addEventListener("input", (e) => {
        renderRules(e.target.value);
      });
    });
});
