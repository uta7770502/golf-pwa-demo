let rules = [];
fetch('rules.json')
  .then(response => response.json())
  .then(data => rules = data);

function showSuggestions() {
  let input = document.getElementById('searchBox').value.toLowerCase();
  let suggestionBox = document.getElementById('suggestions');
  suggestionBox.innerHTML = "";
  if (input.length === 0) return;

  let filtered = rules.filter(r => r.title.toLowerCase().includes(input));
  filtered.slice(0, 5).forEach(r => {
    let li = document.createElement('li');
    li.textContent = r.title;
    suggestionBox.appendChild(li);
  });
}
