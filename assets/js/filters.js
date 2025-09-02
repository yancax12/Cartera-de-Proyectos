function debounce(fn, ms=200){
  let t; return (...args) => { clearTimeout(t); t=setTimeout(()=>fn(...args),ms); };
}

export function setupFilterGrid({ gridSelector, searchInputId, chipsContainerId }){
  const grid = document.querySelector(gridSelector);
  const cards = Array.from(grid.querySelectorAll('.project-card, .blog-card'));
  const search = document.getElementById(searchInputId);
  const chips = document.getElementById(chipsContainerId);
  let activeTag = 'all';

  function apply(){
    const q = (search.value || '').toLowerCase();
    cards.forEach(c=>{
      const tags = (c.dataset.tags || '').toLowerCase();
      const matchesTag = activeTag==='all' || tags.includes(activeTag);
      const matchesText = !q || c.innerText.toLowerCase().includes(q);
      c.style.display = (matchesTag && matchesText) ? '' : 'none';
    });
  }

  search?.addEventListener('input', debounce(apply,150));
  chips?.addEventListener('click', e=>{
    const btn = e.target.closest('button[data-filter]');
    if(!btn) return;
    activeTag = btn.dataset.filter;
    chips.querySelectorAll('button').forEach(b=>b.classList.remove('active-chip'));
    btn.classList.add('active-chip');
    apply();
  });
  apply();
}
