(function () {
  var button = document.querySelector('.theme-toggle');
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  var manual = false;
  try { manual = ['light', 'dark'].indexOf(localStorage.getItem('theme')) !== -1; } catch (e) {}

  function render(theme) {
    document.documentElement.dataset.theme = theme;
    var dark = theme === 'dark';
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('aria-pressed', String(dark));
  }

  button.addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    manual = true;
    try { localStorage.setItem('theme', next); } catch (e) {}
    render(next);
  });
  function followSystem(event) { if (!manual) render(event.matches ? 'dark' : 'light'); }
  if (system.addEventListener) system.addEventListener('change', followSystem);
  else if (system.addListener) system.addListener(followSystem);
  render(document.documentElement.dataset.theme);
})();
