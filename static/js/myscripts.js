window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (!header) return;

  const threshold = window.innerHeight * 0.6;
  const currentScroll = window.scrollY;
  console.log('Scroll:', currentScroll, 'Threshold:', threshold);

  if (currentScroll > threshold) {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }
});