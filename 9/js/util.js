/**
 * Функция для вывода случайного целого числа из диапазона
 * @param {Number} min — минимальное число
 * @param {Number} max — максимальное число
 * @return {integer} — случайное число
 */

function getRandomPositiveInteger (a, b) {

  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
}

/**
 * Функция для вывода случайного числа с плавающей запятой из диапазона
 * @param {Number} min — минимальное число
 * @param {Number} max — максимальное число
 * @param {Number} digits — число знаков после запятой
 * @return {float} — случайное число с плавающей запятой
 */
function getRandomPositiveFloat (a, b, digits = 1) {

  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (max - min) + min;
  return +result.toFixed(digits);
}

/**
 * Функция для выбора случайного элемента из массива
 * @param {Array} elements — массив
 * @return {*} — случайный элемент
 */

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

/**
* Функция для перемешивания массива
* @param {Array} array — массив
* @return {Array} - перемешанный массив
*/
const getMixedArray = (array) => array.map((i) => [Math.random(), i]).sort().map((i)=>i[1]);

/**
 * Функция для генерации нового массива на основе старого случайным образом
 * @param {Array} array — массив
 * @param {Integer} startIndex - индекс, с которого начнется удаление элементов
 * @param {Integer} deleteCount - количество удаляемых элементов
 * @return {Array} - новый массив с рандомным количеством элементов
 */

const getNewArray = function (array) {
  const startIndex = getRandomPositiveInteger(0, array.length - 1);
  const deleteCount = getRandomPositiveInteger(0, array.length);
  return array.splice(startIndex, deleteCount);
};

/**
 * Функция для получения нового перемешанного массива случайной длины
 * @param {Array} array — массив
 * @param {Array} mixedArray - рандомно перемешанный массив
 * @param {Array} newArray - новый массив случайной длины
 */
const getNewRandomArray = function (array) {
  const mixedArray = getMixedArray(array);
  const newArray = getNewArray(mixedArray);
  return newArray;
};

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

/**
 * Функция для получения уникального ID (перебираются по порядку)
 * @return {Integer} - уникальный ID
 */
const createID = function () {
  let lastID = 0;

  return function () {
    lastID += 1;
    return lastID;
  };
};

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

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getNewRandomArray, numWord, createID, isEscapeKey, showErrMessage};

