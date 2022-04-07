import {numWord} from './util.js';

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const livingType = {
  flat: {
    name: 'Квартира',
    minPrice: 1000 ,
  },
  bungalow: {
    name: 'Бунгало',
    minPrice: 0 ,
  },
  house: {
    name: 'Дом',
    minPrice: 5000,
  },
  palace: {
    name: 'Дворец',
    minPrice: 10000,
  },
  hotel: {
    name: 'Отель',
    minPrice: 3000,
  }
};

const roomsNouns = [
  'комната', 'комнаты', 'комнат'
];

const guestsNouns = [
  'гостя', 'гостей', 'гостей'
];

const renderPopup = ({author , offer}) => {
  const {title, address, type, rooms, guests, checkin, checkout, features, description, photos, price} = offer;
  const popupElement = popupTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = title;
  popupElement.querySelector('.popup__text--address').textContent = address;

  if (type) {
    popupElement.querySelector('.popup__type').textContent = livingType[type].name;
  } else {
    popupElement.querySelector('.popup__type').remove();
  }

  popupElement.querySelector('.popup__text--capacity').textContent = `${rooms} ${numWord(rooms, roomsNouns)} для ${guests} ${numWord(guests, guestsNouns)}`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  if (description) {
    popupElement.querySelector('.popup__description').textContent =  description;
  } else {
    popupElement.querySelector('.popup__description').remove();
  }
  if (author.avatar) {
    popupElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    popupElement.querySelector('.popup__avatar').remove();
  }
  popupElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;

  const popupFeatures = popupElement.querySelector('.popup__features');
  const featuresList =  popupFeatures.querySelectorAll('.popup__feature');

  if (features) {
    featuresList.forEach((featureListItem) => {
      const isUsed = features.some(
        (feature) => featureListItem.classList.contains(`popup__feature--${feature}`)
      );

      if (!isUsed) {
        featureListItem.remove();
      }
    });
  }

  // if (!popupFeatures.childElementCount) {
  //   popupFeatures.remove();
  // } как внести правило??

  const photosList = popupElement.querySelector('.popup__photos');
  const photoTemplate = photosList.querySelector('.popup__photo');

  if (photos) {
    photos.forEach((photo) => {
      const photoElement = photoTemplate.cloneNode();
      photoElement.src = photo;
      photosList.append(photoElement);
    });
  }

  photoTemplate.remove(); //удаляет первое фото - шаблон
  if (!photosList.childElementCount) {
    photosList.remove();
  }

  return popupElement;
};

export {renderPopup};


