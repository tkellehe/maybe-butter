(() => {
  const studioNote = document.querySelector('.studio-note');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!studioNote || prefersReducedMotion || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('studio-motion');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  observer.observe(studioNote);
})();
