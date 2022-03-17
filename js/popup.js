const popupTemplate = document.querySelector('#card').content.querySelector('.popup');


//учесть, если данных в поле не будет? через удаление тега для данных?


//Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, «2 комнаты для 3 гостей».
// В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
// Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.

const livingType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const popupList = document.querySelector('#map-canvas');

const renderPopup = ({author , offer}) => {
  const {title, address, type, rooms, guests, checkin, checkout, features, description, photos, price} = offer;
  const popupElement = popupTemplate.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = title;
  popupElement.querySelector('.popup__text--address').textContent = address;
  popupElement.querySelector('.popup__type').textContent = livingType[type];
  popupElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  popupElement.querySelector('.popup__description').textContent =  description;
  popupElement.querySelector('.popup__avatar').src = author.avatar;
  popupElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;

  const popupFeatures = popupElement.querySelector('.popup__features');
  const featuresList =  popupFeatures.querySelectorAll('.popup__feature');
  featuresList.forEach((featureListItem) => {
    const isUsed = features.some(
      (feature) => featureListItem.classList.contains('popup__feature--' + feature)
    );

    if (!isUsed) {
      featureListItem.remove();
    }
  })

  const photosList = popupElement.querySelector('.popup__photos');
  const photoTemplate = photosList.querySelector('.popup__photo')
  photos.forEach((photo) => {
    const photoElement = photoTemplate.cloneNode();
    photoElement.src = photo;
    photosList.append(photoElement);
  })




  popupList.appendChild(popupElement)
}

export {renderPopup};



