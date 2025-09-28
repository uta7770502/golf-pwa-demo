let rules = [];

// JSONを読み込む
fetch('rules.json')
  .then(response => response.json())
  .then(data => {
    rules = data.rules;
    displayRules(rules);
  });

// ルールを一覧表示
function displayRules(rules) {
  const container = document.getElementById('rulesList');
  if (!container) return;
  container.innerHTML = '';
  rules.forEach(rule => {
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'rule-btn';
    a.textContent = rule.title;
    container.appendChild(a);
  });
}

// 検索フィルター
function filterRules() {
  const query = document.getElementById('ruleSearch').value.toLowerCase();
  const filtered = rules.filter(rule => rule.title.toLowerCase().includes(query));
  displayRules(filtered);
}

function searchRules() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const filtered = rules.filter(rule => rule.title.toLowerCase().includes(query));
  if (filtered.length > 0) {
    window.location.href = "rules.html";
  }
}
