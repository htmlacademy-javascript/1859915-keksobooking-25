import {createMapMarkers} from './map.js';
const SIMILAR_OFFERS_COUNT = 10;

const getData = () => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      createMapMarkers(offers.slice(0, SIMILAR_OFFERS_COUNT));
    });
};

// const sendData = () => {
//   const formData = new FormData(evt.target);
//   fetch(
//     'https://25.javascript.pages.academy/keksobooking',
//     {
//       method: 'POST',
//       body: formData,
//     })
//     .then((response) => {
//       if (response.ok) {
//         onSuccess(true);
//         form.reset(); //как оставить значения по умолчанию?
//       } else {
//         onSuccess(false);
//       }
//     })
//     .catch(() => onSuccess(false));
// };

export {getData};
