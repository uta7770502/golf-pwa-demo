async function loadRules() {
  const response = await fetch('rules.json');
  const rules = await response.json();

  const container = document.getElementById('rulesContainer');
  if (!container) return;

  // カテゴリごとにグループ化
  const grouped = {};
  rules.forEach(rule => {
    if (!grouped[rule.category]) grouped[rule.category] = [];
    grouped[rule.category].push(rule);
  });

  // あいうえお順にソート
  for (const cat in grouped) {
    grouped[cat].sort((a, b) => a.title.localeCompare(b.title, 'ja'));
  }

  // 出力
  for (const cat in grouped) {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = cat;
    section.appendChild(h2);

    grouped[cat].forEach(rule => {
      const div = document.createElement('div');
      div.className = 'rule-item';
      div.innerHTML = `<div class="rule-title">${rule.title}</div>
                       <div class="rule-summary">${rule.summary}</div>`;
      section.appendChild(div);
    });
    container.appendChild(section);
  }

  // 検索と予測表示
  const searchInput = document.getElementById('searchRules');
  const suggestions = document.getElementById('ruleSuggestions');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      suggestions.innerHTML = '';
      if (query.length > 0) {
        const matches = rules.filter(r => r.title.toLowerCase().includes(query));
        matches.forEach(m => {
          const li = document.createElement('li');
          li.textContent = m.title;
          li.onclick = () => {
            searchInput.value = m.title;
            suggestions.innerHTML = '';
          };
          suggestions.appendChild(li);
        });
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', loadRules);
