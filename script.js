document.querySelectorAll('.nav a').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.textShadow = '0 0 10px rgba(255, 122, 159, 0.85)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.textShadow = '';
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.panel').forEach((panel, index) => {
  panel.style.opacity = '0';
  panel.style.transform = 'translateY(14px)';
  panel.style.transition = `all 0.55s ${index * 0.12}s ease`;
  observer.observe(panel);
});
