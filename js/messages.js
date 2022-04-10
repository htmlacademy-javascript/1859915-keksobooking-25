import {isEscapeKey} from './util.js';

const MESSAGE_SHOW_TIME = 5000;

const body = document.body;

const successMessageTemplate = body.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);

const errorMessageTemplate = body.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);

/**
 * Функция для вывода сообщения об успехе или ошибке
 * @param {Boolean} success - успех или ошибка
 */
const showFormMessage = (success) => {

  const message = success ? successMessage : errorMessage;
  body.appendChild(message);

  document.addEventListener('click', () => {
    message.remove();
  }, { once: true });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      message.remove();
    }
  }, { once: true });

  if (!success) {
    const closeButton = errorMessage.querySelector('.error__button');
    closeButton.addEventListener('click', () => {
      message.remove();
    });
  }
};

const showServerErrorMessage = (message) => {
  const messageContainer = document.createElement('div');
  messageContainer.style.zIndex = 100;
  messageContainer.style.position = 'absolute';
  messageContainer.style.top = 0;
  messageContainer.style.right = 0;
  messageContainer.style.left = 0;
  messageContainer.style.padding = '20px';
  messageContainer.style.fontSize = '20px';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.color = 'black';
  messageContainer.style.backgroundColor = '#d17381';
  messageContainer.style.boxShadow = '0px 2px rgba(0, 0, 0, 0.2)';

  messageContainer.textContent = message;

  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, MESSAGE_SHOW_TIME);
};

export {showFormMessage, showServerErrorMessage};
