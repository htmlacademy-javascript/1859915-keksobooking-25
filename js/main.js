// import {activateForm, blockAllForm} from './activate-form.js';
import {setUserFormSubmit} from './user-form.js';
import {activateMap, createMapMarkers} from './map.js';
import {showErrMessage} from './util.js';
import {getMessage} from './message.js';
import {getData, renderMapPins} from './api.js';

// const SIMILAR_OFFERS_COUNT = 10;

setUserFormSubmit(getMessage); //нужен ли вообще аргумент?
/*
1.неактивное состояние, заблокировано всё
2.загрузка карты
3.форма для объявление разблокирована
4.загрузка пинов
5.фильтры разблокированы   /если пины не загрузились - сообщение об ошибке, фильтры остаются недоступными
*/


// activateForm(false);
// blockAllForm();

activateMap();

getData(renderMapPins, showErrMessage);


