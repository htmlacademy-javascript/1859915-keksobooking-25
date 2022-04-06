/**
 * Функция для подбора склонения существительного в словосочетании с числительным
 * @param {Integer} value — числительное
 * @param {Array} words — массив вариантов склонений
 * @return {String} - существительное в верном склонении
 */

function numWord (value, words) {
  const num = value % 10;
  if (value > 10 && value < 20) {return words[2];}
  if (num > 1 && num < 5) {return words[1];}
  if (num === 1) {return words[0];}
  return words[2];
}

const isEscapeKey = (evt) => evt.key === 'Escape';
const MESSAGE_SHOW_TIME = 5000;
//сообщение об ошибке получения данных с сервера
const showErrMessage = (message) => {
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

export {numWord, isEscapeKey, showErrMessage};

