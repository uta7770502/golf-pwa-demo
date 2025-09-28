document.addEventListener("DOMContentLoaded", () => {
  const rulesListElement = document.getElementById("rulesList");
  const ruleDetailElement = document.getElementById("ruleDetail");

  fetch("rules.json")
    .then(res => res.json())
    .then(data => {
      if (rulesListElement) {
        data.rules.forEach(rule => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="detail.html?id=${rule.id}" class="button-link green-button">${rule.title}</a>`;
          rulesListElement.appendChild(li);
        });
      }

      if (ruleDetailElement) {
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get("id"));
        const rule = data.rules.find(r => r.id === id);
        if (rule) {
          ruleDetailElement.innerHTML = `
            <h2>${rule.title}</h2>
            <p>ここに要約版の説明が入ります。</p>
          `;
        }
      }
    });
});
