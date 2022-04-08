import {updateSliderOptions, validateSliderUpdates} from './slider.js';
import {resetAllForms} from './reset.js';
import {resetMap} from './map.js';
import {showFormMessage} from './messages.js';
import {sendData} from './api.js';

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

const validatePrice = () => {
  const type = form.querySelector('#type').value;
  return  priceInput.value >= minPrice[type];
};

const getPriceErrorMessage = () => {
  const type = form.querySelector('#type').value;
  return `Цена не меньше ${minPrice[type]}`;
};
pristine.addValidator(priceInput, validatePrice, getPriceErrorMessage);

const onTypeChange = (evt) => {
  priceInput.placeholder = minPrice[evt.target.value];
  const type = typeInput.value;
  updateSliderOptions(type); //по типу жилья обновляет настройки слайдера
  pristine.validate(priceInput);
};
typeInput.addEventListener('change', onTypeChange);

validateSliderUpdates(pristine.validate);

const roomsGuests = {
  1 : {
    guests: [1],
    message: 'only one guest'
  },
  2 : {
    guests: [1, 2],
    message: 'max 2 guests'
  },
  3 : {
    guests: [1, 2, 3],
    message: 'max 3 guests'
  },
  100 : {
    guests: [0],
    message: 'not for guests'
  },
};

const roomsField = form.querySelector('#room_number');
const guestsField = form.querySelector('#capacity');

const validateRoomsGuests = () => {
  const selectedRooms = roomsField.value;
  const selectedGuests = guestsField.value;
  const allowedGuests = roomsGuests[+selectedRooms].guests;
  return allowedGuests.includes(+selectedGuests);
};

pristine.addValidator(roomsField, validateRoomsGuests, 'количество комнат не соответствует');

roomsField.addEventListener('change', () => {
  pristine.validate(roomsField);
});

guestsField.addEventListener('change', () => {
  pristine.validate(roomsField);
});

const onTimeInChange = () => {
  const timeIn = document.querySelector('#timein').value;
  document.querySelector('#timeout').value = timeIn;
};

const onTimeOutChange = () => {
  const timeOut = document.querySelector('#timeout').value;
  document.querySelector('#timein').value = timeOut;
};

const timeInInput = document.querySelector('#timein');
const timeOutInput = document.querySelector('#timeout');
timeInInput.addEventListener('change', onTimeInChange);
timeOutInput.addEventListener('change', onTimeOutChange);

const submitButton = document.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const resetButton = form.querySelector('.ad-form__reset');

const resetButtonHandler = (cb) => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetAllForms();
    resetMap();
    cb();
  });
};


//отправка формы
const setUserFormSubmit = (cb) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      sendData(formData, () => {
        showFormMessage(true);
        resetAllForms();
        resetMap();
        cb();
        unblockSubmitButton();
      }, () => {
        showFormMessage(false);
        unblockSubmitButton();
      });
    }
  });
};

export {setUserFormSubmit, resetButtonHandler};


