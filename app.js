document.getElementById('action')?.addEventListener('click', () => {
  const s = document.getElementById('subtitle');
  s.textContent = 'Nice — you clicked the button.';
  s.style.opacity = 1;
  console.log('Button clicked — site updated.');
});
