const roomsGuests = {
  1 : {
    rooms: [1],
    messsage: 'only one guest'
  },
  2 : {
    rooms: [1,2],
    messsage: 'max 2 guests'
  },
  3 : {
    rooms: [1,2,3],
    messsage: 'max 3 guests'
  },
};

const activateValidation = () => {

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
    let allowedGuestsNumbers = roomsGuests[+roomsFieldValue].rooms;

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

    // const allowedGuestsNumbers = roomsGuests[+roomsFieldValue].rooms;
    // debugger;
    return allowedGuestsNumbers.includes(+guestsFieldValue);
  };

  pristine.addValidator(roomsField, validateRoomsGuests, 'количество комнат не соответствует');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      form.submit();
    }
    // debugger;
  });

};

export {activateValidation};


