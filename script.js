async function loadRules() {
  const res = await fetch('rules.json');
  const data = await res.json();
  const container = document.getElementById('rulesContainer');
  if (!container) return;
  container.innerHTML = '';
  data.rules.forEach(rule => {
    const btn = document.createElement('button');
    btn.textContent = rule.title;
    btn.className = 'rule-button';
    container.appendChild(btn);
  });
}

function searchRules(query) {
  query = query.toLowerCase();
  const buttons = document.querySelectorAll('.rule-button');
  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase().includes(query)) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
}

window.onload = () => {
  loadRules();
};
