fetch('rules.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('rulesContainer');
    const searchBox = document.getElementById('searchBox');

    function renderRules(filter = '') {
      container.innerHTML = '';
      const grouped = {};
      data.forEach(rule => {
        if (rule.title.includes(filter)) {
          if (!grouped[rule.category]) grouped[rule.category] = [];
          grouped[rule.category].push(rule.title);
        }
      });

      Object.keys(grouped).sort().forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.className = 'category';
        catDiv.textContent = cat;
        container.appendChild(catDiv);

        grouped[cat].sort().forEach(title => {
          const btn = document.createElement('a');
          btn.className = 'button';
          btn.textContent = title;
          container.appendChild(btn);
        });
      });
    }

    searchBox.addEventListener('input', () => renderRules(searchBox.value));
    renderRules();
  });
