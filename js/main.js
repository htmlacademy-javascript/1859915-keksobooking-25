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

const TITLES = [
  'Райское место',
  'Уютный уголок',
  'Прекрасное жилье',
  'Счастье путешественника'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN_OUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Шикарное жилье с видом на горы',
  'Панорамные окна для встречи заката',
  'Тихое местечко для размеренного отдыха',
  'Номер для деловых поездок и командировок',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_OFFERS_COUNT = 10;

/**
 * Функция для выбора случайного элемента из массива
 * @param {Array} elements — массив
 * @return {*} — случайный элемент
 */
const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

/**
* Функция для перемешивания массива
* @param {Array} array — массив
* @return {Array} - перемешанный массив
*/
const getMixedArray = (array) => {
  return array.map(i => [Math.random(), i]).sort().map(i=>i[1]);
};


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
 *  @param {Array} array — массив
 *  @param {Array} mixedArray - рандомно перемешанный массив
 *  @param {Array} newArray - новый массив случайной длины
 */
 const getNewRandomArray = function (array) {
  const mixedArray = getMixedArray(array);
  const newArray = getNewArray(mixedArray);
  return newArray;
};


let avatarNumber = 0;


/**
 * Функция для получения данных одного объявления
 *  @param {Array} avatarNumber — id аватара
 *  @param {Array} mixedArray - рандомно перемешанный массив
 *  @param {Array} newArray - новый массив случайной длины
 */
const createOffer = () => {

  avatarNumber = avatarNumber + 1;
  // avatarNumber = Number(avatarNumber)++;

  // if (avatarNumber < 10) {
  //   avatarNumber = '0' + avatarNumber;
  // }

  const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: avatarNumber < 10 ? 'img/avatars/user' + '0' + avatarNumber + '.png' : 'img/avatars/user' + '0' + avatarNumber + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      adress: `${lat} , ${lng}`,
      price: getRandomPositiveInteger(0, 200000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(1, 10),
      guests: getRandomPositiveInteger(1, 40),
      checkin: getRandomArrayElement(CHECK_IN_OUT),
      checkout: getRandomArrayElement(CHECK_IN_OUT),
      features: getNewRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getNewRandomArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    }
  };
};

const similarOffers = Array.from({length: SIMILAR_OFFERS_COUNT}, createOffer);
console.log(similarOffers);
