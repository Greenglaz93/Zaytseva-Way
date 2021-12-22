const inputs = document.querySelectorAll('.input');
const inputErrors = document.querySelectorAll('.input-wrapper__error');

export const validateForm = () => {
  inputs.forEach((input, i) => {
    input.addEventListener('input', (evt) => {
      if (input.checkValidity() === false) {
        inputErrors[i].classList.add('input-wrapper__error--show');
        evt.target.style.borderColor = '#fe7865';
      } else {
        inputErrors[i].classList.remove('input-wrapper__error--show');
        evt.target.style.borderColor = '';
      }
    });
  });
};
