const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const items = itemList.getElementsByTagName('li');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(searchTerm)) {
      item.style.display = 'block'; // Exibe o item
    } else {
      item.style.display = 'none'; // Oculta o item
    }
  }
});
