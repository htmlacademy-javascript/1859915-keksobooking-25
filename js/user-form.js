import { updateSliderOptions } from "./slider.js";

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--error',
  successClass: 'ad-form__element--success',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const priceInput = form.querySelector('#price');
const typeInput = form.querySelector('#type');

const validatePrice = (value) => {
  const type = form.querySelector('#type').value;
  return  parseInt(value) >= minPrice[type];
}

const getPriceErrorMessage = () => {
  const type = form.querySelector('#type').value;
  return `Цена не меньше ${minPrice[type]}`;
}
pristine.addValidator(priceInput, validatePrice, getPriceErrorMessage);

const onTypeChange = () => {
  priceInput.placeholder = minPrice[this]; //что за значение this?
  const type = typeInput.value;
  updateSliderOptions(type); //по типу жилья обновляет настройки слайдера
  pristine.validate(priceInput);
}
typeInput.addEventListener('change', onTypeChange);

const roomsGuests = {
  '1' : {
    guests: [1],
    message: 'only one guest'
  },
  '2' : {
    guests: [1, 2],
    message: 'max 2 guests'
  },
  '3' : {
    guests: [1, 2, 3],
    message: 'max 3 guests'
  },
  '100' : {
    guests: [0],
    message: 'not for guests'
  },
};

const roomsField = form.querySelector('#room_number');
const guestsField = form.querySelector('#capacity');

const validateRoomsGuests = () => {
  const selectedRooms = roomsField.value;
  const selectedGuests = guestsField.value;
  const allowedGuests = roomsGuests[selectedRooms].guests;
  return allowedGuests.includes(+selectedGuests);
};

pristine.addValidator(roomsField, validateRoomsGuests, 'количество комнат не соответствует');
pristine.addValidator(guestsField, validateRoomsGuests, 'количество комнат не соответствует');

roomsField.addEventListener('change', () => {
  pristine.validate(roomsField);
  pristine.validate(guestsField);
});

guestsField.addEventListener('change', () => {
  pristine.validate(roomsField);
  pristine.validate(guestsField);
});


const submitButton = document.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};


//отправка формы
const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      fetch(
        'https://25.javascript.pages.academy/keksobooking',
        {
          method: 'POST',
          contentType: 'multipart/form-data',
          body: formData,
        })
        .then((response) => {
          if (response.ok) {
            onSuccess(true);
            form.reset(); //как оставить значения по умолчанию?
          } else {
            onSuccess(false);
          }
        })
        .then(() => unblockSubmitButton())
        .catch(() => onSuccess(false));
    }
  });
};


export {setUserFormSubmit};


