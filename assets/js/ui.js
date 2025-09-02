export function setupThemeToggle(){
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  btn?.addEventListener('click', () => {
    root.classList.toggle('dark');
  });
}

export function setCurrentYear(){
  document.getElementById('year').textContent = new Date().getFullYear();
}

