import {activateForm} from './activate-form.js';
import {setUserFormSubmit} from './user-form.js';
// import {createMapMarkers} from './map.js';
// import {showErrMessage} from './util.js';
import {getMessage} from './message.js';
import {getData} from './api.js';

setUserFormSubmit(getMessage);
activateForm(true);

getData();
// showErrMessage('Произошла ошибка на сервере, попробуйте ещё раз');

