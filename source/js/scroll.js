// Плавный скролл

const smoothLinks = document.querySelectorAll('a[href^="#"]');

export const addSmoothScroll = () => {
  smoothLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};
