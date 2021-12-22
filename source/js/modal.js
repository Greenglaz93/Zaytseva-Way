const buttonBuy = document.querySelectorAll('.btn--buy');
const modalBuy = document.querySelector('.modal--buy');
const modalSuccess = document.querySelector('.modal--success');
const modalClose = document.querySelectorAll('.modal__close');
const overlay = document.querySelector('.overlay');
const forms = document.querySelectorAll('form');
const inputTels = document.querySelectorAll('.input--tel');
const inputEmails = document.querySelectorAll('.input--email');

const openModal = (modalName) => {
  modalName.classList.add('modal--opened');
  overlay.classList.add('overlay--add');
};

const closeModal = (modalName) => {
  modalName.classList.remove('modal--opened');
  overlay.classList.remove('overlay--add');
};

buttonBuy.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModal(modalBuy);

    for (let i = 0; i < forms.length; i++) {
      if (!inputTels[i].value) {
        inputTels[i].focus();
      } else if (!inputEmails[i].value) {
        inputEmails[i].focus();
      }
    }
  });
});

modalClose.forEach((closebtn) => {
  closebtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeModal(modalSuccess);
    closeModal(modalBuy);
  });
});

window.addEventListener('keydown', (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    if (modalBuy.classList.contains('modal--opened')) {
      evt.preventDefault();
      closeModal(modalBuy);
    }
    if (modalSuccess.classList.contains('modal--opened')) {
      evt.preventDefault();
      closeModal(modalSuccess);
    }
  }
});

overlay.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal(modalBuy);
  closeModal(modalSuccess);
});

inputTels.forEach((tel) => {
  tel.addEventListener('focus', (evt) => {
    if (!tel.value) {
      evt.target.value = '+7';
    }
  });

  tel.addEventListener('blur', (evt) => {
    if (tel.value === '+7') {
      evt.target.value = '';
    }
  });
});

let isStorageSupport = true;
let storageTel = '';
let storageEmail = '';

try {
  storageTel = localStorage.getItem('tel');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (storageTel || storageEmail) {
  inputTels.forEach((tel) => tel.value = storageTel);
  inputEmails.forEach((email) => email.value = storageEmail);
}

forms.forEach((form, i) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (!inputTels[i].value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('tel', inputTels[i].value);
        localStorage.setItem('email', inputEmails[i].value);
      }

      openModal(modalSuccess);
    }
  });
});
