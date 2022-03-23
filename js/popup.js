const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

//учесть, если данных в поле не будет? через удаление тега для данных?

// Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.

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

/**
 * Функция для подбора склонения существительного в словосочетании с числительным
 *  @param {Integer} value — числительное
 *  @param {Array} words — массив вариантов склонений
 *  @return {String} - существительное в верном склонении
 */

function numWord (value, words) {
  const num = value % 10;
  if (value > 10 && value < 20) {return words[2];}
  if (num > 1 && num < 5) {return words[1];}
  if (num === 1) {return words[0];}
  return words[2];
}

const popupList = document.querySelector('#map-canvas');

const renderPopup = ({author , offer}) => {
  const {title, address, type, rooms, guests, checkin, checkout, features, description, photos, price} = offer;
  const popupElement = popupTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = title;

  address ? popupElement.querySelector('.popup__text--address').textContent = address : popupElement.querySelector('.popup__text--address').remove();
  type ?  popupElement.querySelector('.popup__type').textContent = livingType[type].name : popupElement.querySelector('.popup__type').remove();

  popupElement.querySelector('.popup__text--capacity').textContent = `${rooms} ${numWord(rooms, roomsNouns)} для ${guests} ${numWord(guests, guestsNouns)}`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  description ? popupElement.querySelector('.popup__description').textContent =  description : popupElement.querySelector('.popup__description').remove();
  author.avatar ? popupElement.querySelector('.popup__avatar').src = author.avatar : popupElement.querySelector('.popup__avatar').remove();
  popupElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;

  const popupFeatures = popupElement.querySelector('.popup__features');
  const featuresList =  popupFeatures.querySelectorAll('.popup__feature');
  featuresList.forEach((featureListItem) => {
    const isUsed = features.some(
      (feature) => featureListItem.classList.contains(`popup__feature--${feature}`)
    );

    if (!isUsed) {
      featureListItem.remove();
    }
  });

  if (!popupFeatures.childElementCount) {
    popupFeatures.remove();
  }

  const photosList = popupElement.querySelector('.popup__photos');
  const photoTemplate = photosList.querySelector('.popup__photo');
  photos.forEach((photo) => {
    const photoElement = photoTemplate.cloneNode();
    photoElement.src = photo;
    photosList.append(photoElement);
  });

  photoTemplate.remove(); //удаляет первое фото - шаблон
  if (!photosList.childElementCount) {
    photosList.remove();
  }

  popupList.appendChild(popupElement);


  // const popupFields = popupElement.children;
  // for (let i = 0; i < popupFields.length; i++) {
  //   if (!popupFields[i].textContent) {popupFields[i].remove()}
  // }
  // popupFields.forEach((field) => {
  //   if (!field.textContent) {field.remove()}
  // })

};

export {renderPopup};


