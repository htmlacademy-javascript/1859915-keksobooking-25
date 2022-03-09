import {getRandomPositiveInteger} from './util.js';
import {getRandomPositiveFloat} from './util.js';
import {getRandomArrayElement}from './util.js';
import {getNewRandomArray} from './util.js';

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

/**
 * Функция для получения данных одного объявления
 *  @param {Integer} SIMILAR_OFFERS_COUNT — число необходимых объявлений
 *  @param {Function} createOffer - функция по созданию одного объявления
 *  @return {Array} - массив из заданного числа объявлений
 */
const similarOffers = () => Array.from({length: SIMILAR_OFFERS_COUNT}, createOffer);

export {similarOffers};
