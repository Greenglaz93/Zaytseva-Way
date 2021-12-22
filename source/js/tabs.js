const tabs = document.querySelectorAll('.tabs__link');

export const switchTabs = () => {
  tabs.forEach((tab) => {
    tab.addEventListener('click', (evt) => {
      evt.preventDefault();
      const tabTitle = tab.dataset.tab;
      const tabItem = document.querySelector(`.countries__item--${tabTitle}`);
      document.querySelector('.countries__item--active').classList.remove('countries__item--active');
      tabItem.classList.add('countries__item--active');
      document.querySelector('.tabs__link--active').classList.remove('tabs__link--active');
      tab.classList.add('tabs__link--active');
    });
  });
};
