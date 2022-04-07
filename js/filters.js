import {renderMapPins} from './map.js';
import {getData} from './api.js';
import {showServerErrorMessage} from './messages.js';
const filtersForm = document.querySelector('.map__filters');
const housingTypeInput = filtersForm.querySelector('#housing-type');
const priceInput = filtersForm.querySelector('#housing-price');
const roomsInput = filtersForm.querySelector('#housing-rooms');
const guestsInput = filtersForm.querySelector('#housing-guests');


const prices = {
  any: {
    min: 0,
    max: Infinity,
  },
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


//как сделать отмену фильтра для любого типа жилья?
const filterOffersHousingType = () => {
  getData((offers) => {
    const neededArray = offers.filter((element) => element.offer.type === housingTypeInput.value);
    renderMapPins(neededArray);
  }, showServerErrorMessage);
};

const filterOffersPrice = () => {
  getData((offers) => {
    const neededArray = offers.filter((element) => element.offer.price >= prices[priceInput.value].min && element.offer.price <= prices[priceInput.value].max);
    renderMapPins(neededArray);
  }, showServerErrorMessage);
};

const filterOffersRooms = () => {
  getData((offers) => {
    const neededArray = offers.filter((element) => element.offer.rooms === +roomsInput.value);
    renderMapPins(neededArray);
  }, showServerErrorMessage);
};

const filterOffersGuests = () => {
  getData((offers) => {
    const neededArray = offers.filter((element) => element.offer.guests === +guestsInput.value);
    renderMapPins(neededArray);
  }, showServerErrorMessage);
};


housingTypeInput.addEventListener('change', filterOffersHousingType);
priceInput.addEventListener('change',  filterOffersPrice);
roomsInput.addEventListener('change',  filterOffersRooms);
guestsInput.addEventListener('change',  filterOffersGuests);
export {filterOffersHousingType};
