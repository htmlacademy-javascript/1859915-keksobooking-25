import { isEscapeKey } from './util.js';

//доработать - элементы копируются в разметку несколько раз
/**
 * Функция для вывода сообщения об успехе или ошибке
 * @param {Boolean} success - успех или ошибка
 */
const getMessage = (success) => {
  const body = document.querySelector('body');

  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessage = successMessageTemplate.cloneNode(true);

  const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = errorMessageTemplate.cloneNode(true);

  success ? body.appendChild(successMessage) : body.appendChild(errorMessage);

  document.addEventListener('click', () => {
    success ? successMessage.classList.add('hidden') :  errorMessage.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      success ? successMessage.classList.add('hidden') :  errorMessage.classList.add('hidden');
    }
  });

  if (!success) {
    const closeButton = errorMessage.querySelector('.error__button');
    closeButton.addEventListener('click', () => {
      errorMessage.classList.add('hidden');
    });
  }
};

export {getMessage};
