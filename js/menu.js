// Menu page: category filters and search
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.menu-filter-btn');
  const categoryBlocks = document.querySelectorAll('.menu-category-block');
  const searchInput = document.getElementById('menuSearchInput');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      categoryBlocks.forEach(block => {
        block.style.display =
          (filter === 'all' || block.getAttribute('data-cat') === filter) ? 'block' : 'none';
      });

      if (searchInput) searchInput.value = '';
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      categoryBlocks.forEach(block => {
        let visibleCount = 0;
        block.querySelectorAll('.menu-item-entry').forEach(row => {
          const name = row.querySelector('.item-name').innerText.toLowerCase();
          const match = name.includes(query);
          row.style.display = match ? 'flex' : 'none';
          if (match) visibleCount++;
        });
        block.style.display = visibleCount > 0 ? 'block' : 'none';
      });
    });
  }
});
