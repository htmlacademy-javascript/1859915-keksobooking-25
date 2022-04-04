const roomsGuests = {
  1 : {
    rooms: [1],
    messsage: 'only one guest'
  },
  2 : {
    rooms: [1, 2],
    messsage: 'max 2 guests'
  },
  3 : {
    rooms: [1, 2, 3],
    messsage: 'max 3 guests'
  },
  100 : {
    rooms: 'не для гостей',
    messsage: 'not for guests'
  },
};

const form = document.querySelector('.ad-form');
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--error',
  successClass: 'has-success',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});

const roomsField = form.querySelector('#room_number');
const guestsField = form.querySelector('#capacity');

const validateRoomsGuests = () => {

  let roomsFieldValue = roomsField.value;
  let guestsFieldValue = guestsField.value;
  const allowedGuestsNumbers = roomsGuests[+roomsFieldValue].rooms;

  roomsField.addEventListener('change', () => {
    roomsFieldValue = roomsField.value;
    guestsFieldValue = guestsField.value;
    return allowedGuestsNumbers.includes(+guestsFieldValue);
  });

  guestsField.addEventListener('change', () => {
    roomsFieldValue = roomsField.value;
    guestsFieldValue = guestsField.value;
    return allowedGuestsNumbers.includes(+guestsFieldValue);
  });

  return allowedGuestsNumbers.includes(+guestsFieldValue);
};

pristine.addValidator(roomsField, validateRoomsGuests, 'количество комнат не соответствует');

const submitButton = document.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

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


