import { isEscapeKey } from './util.js';
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

  const message = success ? successMessage : errorMessage;
  body.appendChild(message);

  document.addEventListener('click', () => {
    message.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      message.remove();
    }
  });

  if (!success) {
    const closeButton = errorMessage.querySelector('.error__button');
    closeButton.addEventListener('click', () => {
      message.remove();
    });
  }
};

export {getMessage};
