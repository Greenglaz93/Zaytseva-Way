const placeLinks = document.querySelectorAll('.place__link');
const tabs = document.querySelectorAll('.tabs__link');

export const matchAnchor = () => {
  placeLinks.forEach((place) => {
    place.addEventListener('click', () => {
      const placeName = place.dataset.tab;
      const placeItem = document.querySelector(`.countries__item--${placeName}`);
      document.querySelector('.countries__item--active').classList.remove('countries__item--active');
      placeItem.classList.add('countries__item--active');
      document.querySelector('.tabs__link--active').classList.remove('tabs__link--active');
      tabs.forEach((tab) => {
        if (place.dataset.tab === tab.dataset.tab) {
          tab.classList.add('tabs__link--active');
        }
      });
    });
  });
};
