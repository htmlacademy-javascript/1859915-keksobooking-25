import {renderPopup} from './popup.js';
import {unblockForm} from './activate-form.js';

const ZOOM = 12;
const MAIN_PIN_SIZE = 52;
const PIN_SIZE = 40;
const SIMILAR_OFFERS_COUNT = 10;

const tokyoCoordinates = {
  lat: 35.68950,
  lng: 139.69200,
};

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAIN_PIN_SIZE, MAIN_PIN_SIZE],
  iconAnchor: [MAIN_PIN_SIZE / 2, MAIN_PIN_SIZE],
});

const offerPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [PIN_SIZE, PIN_SIZE],
  iconAnchor: [PIN_SIZE / 2, PIN_SIZE],
});

const mainPinMarker = L.marker(tokyoCoordinates,
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

const coordinatesInput = document.querySelector('#address');
coordinatesInput.value = `${tokyoCoordinates.lat}, ${tokyoCoordinates.lng}`;

mainPinMarker.on('move', (evt) => {
  const coordinates = evt.target.getLatLng();
  const lat = coordinates.lat.toFixed(5);
  const lng = coordinates.lng.toFixed(5);
  coordinatesInput.value = `${lat}, ${lng}`;
});

const map = L.map('map-canvas');

const activateMap = () => {
  map.on('load', () => {
    console.log('Карта инициализирована');
    unblockForm();
  })
    .setView(tokyoCoordinates, ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  mainPinMarker.addTo(map);
};

const pinsGroup = L.layerGroup().addTo(map);

const createOfferMarker = (offer) => {
  const {lat, lng} = offer.location;
  const offerMarker = L.marker(
    {
      lat,
      lng
    },
    {
      icon: offerPinIcon,
    });

  offerMarker
    .addTo(pinsGroup)
    .bindPopup(renderPopup(offer));
};
//очистка старого слоя
//сначала обрезать нужное количество
//потом рендер и добавление на карту
const renderMapPins = (offers) => {
  pinsGroup.clearLayers();
  const necessaryOffers = offers.slice(0, SIMILAR_OFFERS_COUNT);
  necessaryOffers.forEach((offer) => {
    createOfferMarker(offer);
  });
};

const resetMap = () => {
  mainPinMarker.setLatLng(tokyoCoordinates);
  map.setView(tokyoCoordinates, ZOOM);
};

export {renderMapPins, resetMap, activateMap};
