import {renderMapPins} from './map.js';
const filtersForm = document.querySelector('.map__filters');
const housingTypeInput = filtersForm.querySelector('#housing-type');
const priceInput = filtersForm.querySelector('#housing-price');
const roomsInput = filtersForm.querySelector('#housing-rooms');
const guestsInput = filtersForm.querySelector('#housing-guests');

const SIMILAR_OFFERS_COUNT = 10;

const prices = {
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  high: {
    min: 50000,
    max: Infinity,
  }
};

const filtersFormChange = (cb) => {
  filtersForm.addEventListener('change', cb);
};

const activateFilters = (offers) => {

  const neededOffers = offers.slice();
  const newArray = [];

  for (let i = 0; i < neededOffers.length; i++) {
    const  element = offers[i];
    let check;

    if (housingTypeInput.value !== 'any') {
      check = element.offer.type === housingTypeInput.value;
      if (!check) {
        continue;
      }
    }

    if (roomsInput.value !== 'any') {
      check = element.offer.rooms === +roomsInput.value;
      if (!check) {
        continue;
      }
    }

    if (priceInput.value !== 'any') {
      check = element.offer.price >= prices[priceInput.value].min && element.offer.price <= prices[priceInput.value].max;
      if (!check) {
        continue;
      }
    }

    if (guestsInput.value !== 'any') {
      check = element.offer.guests === +guestsInput.value;
      if (!check) {
        continue;
      }
    }

    const checkedFeaturesList = Array.from(document.querySelectorAll('input[name="features"]:checked'));
    // массив выбранных фич
    if (checkedFeaturesList.length) {
      //если есть фичи в оффере
      const offerFeaturesList = element.offer.features;
      if (!offerFeaturesList) {continue;} //если массив пустой - переход к следующему объявлению

      check = checkedFeaturesList.every((checkedFeature) => offerFeaturesList.includes(checkedFeature.defaultValue));

      if (!check) {continue;}
    }

    newArray.push(element);

    if (newArray.length === SIMILAR_OFFERS_COUNT) { break; }
  }

  renderMapPins(newArray);
};

export {activateFilters, filtersFormChange};
