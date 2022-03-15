import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getNewRandomArray} from './util.js';

const TITLES = [
  'Райское место',
  'Уютный уголок',
  'Прекрасное жилье',
  'Счастье путешественника'
];

const MIN_PRICE = 100;
const MAX_PRICE = 200000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 20;
const MIN_GUESTS = 1;
const MAX_GUESTS = 40;

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

const MIN_LAT = 35.65
const MAX_LAT = 35.7;
const MIN_LNG = 139.7;
const MAX_LNG = 139.8;
const COORDINATE_DIGITS = 5;




//попыталась сделать функцию вместо avatarNumber и что-то не получилось(
const createID = function () {
  let lastID = 0;

  return function () {
    lastID += 1;
    return lastID;
  };
};

let avatarNumber = 0;

/**
 * Функция для получения данных одного объявления
 *  @param {Integer} avatarNumber — id аватара
 *  @param {Float} lat - широта
 *  @param {Float} lng - долгота
 *  @return {Object} - объект со всеми данными об объявлении
 */

const createOffer = () => {

  avatarNumber = avatarNumber + 1;
  // avatarNumber = Number(avatarNumber)++;

  // if (avatarNumber < 10) {
  //   avatarNumber = '0' + avatarNumber;
  // }

  const lat = getRandomPositiveFloat(MIN_LAT, MAX_LAT, COORDINATE_DIGITS);
  const lng = getRandomPositiveFloat(MIN_LNG, MAX_LNG, COORDINATE_DIGITS);

  return {
    author: {
      avatar: avatarNumber < 10 ? `img/avatars/user0${avatarNumber}.png` : `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomPositiveInteger(MIN_GUESTS, MAX_GUESTS),
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

/**
 * Функция для получения данных одного объявления
 *  @param {Integer} count — число необходимых объявлений
 *  @return {Array} - массив из заданного числа объявлений
 */
const createOffers = (count) => Array.from({length: count}, createOffer);
export {createOffers};
