import {createOffers} from './data.js';
import  {renderPopup} from './popup.js';

const SIMILAR_OFFERS_COUNT = 10;
const offers = createOffers(SIMILAR_OFFERS_COUNT);

// renderPopup(offersData[3]);

const map = L.map('map-canvas')
.on('load', () => {
  console.log('Карта инициализирована');
})
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const offerPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})

const mainPinMarker = L.marker({
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);
mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  const lat = coordinates.lat.toFixed(5);
  const lng = coordinates.lng.toFixed(5);
  document.querySelector('#address').value = `${lat}, ${lng}`;
});

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
    .addTo(map)
    .bindPopup(renderPopup(offer));
}

offers.forEach((offer) => {
  createOfferMarker(offer);
})


// setLatLng({lat,lng}) map.setViev({lat,lng}) - понадобятся далее для сброса карт

//5. сделать фильтрацию объявлений

