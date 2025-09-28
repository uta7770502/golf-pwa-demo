async function loadRules() {
  const res = await fetch('rules.json');
  const data = await res.json();
  return data;
}

// カテゴリ一覧をトップに表示
document.addEventListener("DOMContentLoaded", async () => {
  if (document.getElementById("categories")) {
    const data = await loadRules();
    const container = document.getElementById("categories");
    data.categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.textContent = cat.name;
      btn.onclick = () => {
        window.location.href = `category.html?cat=${cat.id}`;
      };
      container.appendChild(btn);
    });
  }

  // カテゴリーのルール一覧
  if (document.getElementById("rules-list")) {
    const params = new URLSearchParams(window.location.search);
    const catId = params.get("cat");
    const data = await loadRules();
    const category = data.categories.find(c => c.id === catId);
    document.getElementById("category-title").textContent = category.name;
    category.rules.forEach(rule => {
      const li = document.createElement("li");
      li.textContent = rule.question;
      li.onclick = () => {
        window.location.href = `rule.html?cat=${catId}&rule=${rule.id}`;
      };
      document.getElementById("rules-list").appendChild(li);
    });
  }

  // ルール詳細ページ
  if (document.getElementById("rule-detail")) {
    const params = new URLSearchParams(window.location.search);
    const catId = params.get("cat");
    const ruleId = params.get("rule");
    const data = await loadRules();
    const category = data.categories.find(c => c.id === catId);
    const rule = category.rules.find(r => r.id === ruleId);
    const div = document.getElementById("rule-detail");
    div.innerHTML = `<h2>${rule.question}</h2>
      <p><b>簡単な答え:</b> ${rule.answer}</p>
      <p><b>詳しい解説:</b> ${rule.detail}</p>
      <p><b>豆知識:</b> ${rule.tip}</p>`;
  }
});