document.getElementById('year').textContent = new Date().getFullYear();
// Topic links reveal the matching native disclosure before navigating to it.
document.querySelectorAll('a[href$="-guide"]').forEach(link => {
  link.addEventListener('click', () => {
    const panel = document.getElementById(link.getAttribute('href').slice(1));
    if (panel) panel.open = true;
  });
});
