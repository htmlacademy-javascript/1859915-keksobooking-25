import {blockAllForms, unblockFilters} from './activate-form.js';
import {setUserFormSubmit, resetButtonHandler} from './user-form.js';
import {activateMap} from './map.js';
import {showServerErrorMessage} from './messages.js';
import {getData} from './api.js';
import {activateFilters, filtersFormChange} from './filters.js';
import {debounce} from './util.js';
import './photos.js';

const RERENDER_DELAY = 600;


blockAllForms();
activateMap();
getData((offers) => {
  unblockFilters(); //нужно запустить только один раз
  activateFilters(offers);
  filtersFormChange(debounce(() => activateFilters(offers), RERENDER_DELAY));
  resetButtonHandler(() => activateFilters(offers));
  setUserFormSubmit(() => activateFilters(offers));

}, showServerErrorMessage);
