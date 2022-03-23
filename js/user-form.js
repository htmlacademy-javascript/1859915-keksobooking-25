const roomsGuests = {
  1 : {
    rooms: [1],
    messsage: 'only one guest'
  },
  2 : {
    rooms: [1,2],
    messsage: 'only one guest'
  },
  3 : {
    rooms: [1,2],
    messsage: 'only one guest'
  },
}
//перенести в util.js?
const isArrayIncludes = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    }
  }
  return false;
}


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

    let roomsFieldValue;
    //получили значение из поля комнат
    roomsField.addEventListener('change', function() {
    roomsFieldValue = roomsField.value;
    return roomsFieldValue; //не могу вывести значение отсюда:(
    });
    console.log(roomsFieldValue)

    //получили значение из поля гостей
    guestsField.addEventListener('change', function(){
      return guestsFieldValue = guestsField.value; //аналогично
    });
    //зайти в объект roomsGuests, по ключу найти допустимый массив
    const allowedGuestsNumbers =  roomsGuests[roomsFieldValue].rooms;
    //проверить, есть ли в массиве значение, полученное из поля гостей
    return isArrayIncludes(allowedGuestsNumbers, guestsFieldValue)
  }

  pristine.addValidator(roomsField, validateRoomsGuests, 'количество комнат не соответствует')

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      form.submit();
    };
    // debugger;
  })

};

export {activateValidation};




