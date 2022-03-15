const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

//взять данные из массива функции createOffers,
//вставить по шаблону нужное значение в нужное место и тег
//создать функцию forEach
//создать место, куда будут клонироваться объявления
//по тегу найти нужные поля для вставки
//учесть, если данных в поле не будет? через удаление тега для данных?


//Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, «2 комнаты для 3 гостей».
// Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».
// В список .popup__features выведите все доступные удобства в объявлении.
// В блок .popup__description выведите описание объекта недвижимости offer.description.
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

const renderPopup = ({author , offer, location}) => {
  const {title, address, type, rooms, guests, checkin, checkout,  description, price} = offer;
  const popupElement = popupTemplate.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = title;
  popupElement.querySelector('.popup__text--address').textContent = address;
  popupElement.querySelector('.popup__type').textContent = livingType[type];
  popupElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  popupElement.querySelector('.popup__description').textContent =  description;
  popupElement.querySelector('.popup__avatar').src = author.avatar;
  popupElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  popupList.appendChild(popupElement)
}

export {renderPopup};



