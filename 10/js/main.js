import {blockAllForms, unblockFilters} from './activate-form.js';
import {setUserFormSubmit} from './user-form.js';
import {activateMap, renderMapPins} from './map.js';
import {showServerErrorMessage} from './messages.js';
import {getData} from './api.js';
import './photos.js'; //заменить на функцию


// const SIMILAR_OFFERS_COUNT = 10;

setUserFormSubmit();
/*
1.неактивное состояние, заблокировано всё /не получается!!!
2.загрузка карты
3.форма для объявление разблокирована
4.загрузка пинов
5.фильтры разблокированы   /если пины не загрузились - сообщение об ошибке, фильтры остаются недоступными
*/

blockAllForms();
activateMap();
getData((offers) => {
  renderMapPins(offers);
  unblockFilters();//фильтры разблокировались раньше отрисовки пинов
}, showServerErrorMessage);


