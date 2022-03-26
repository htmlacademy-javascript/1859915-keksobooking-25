// import {createOffers} from './data.js';
// import  {renderPopup} from './popup.js';
import {activateForm} from './form.js';
import {activateValidation} from './user-form.js';
import './map.js';

// const SIMILAR_OFFERS_COUNT = 10;

// const offersData = createOffers(SIMILAR_OFFERS_COUNT);
// renderPopup(offersData[3]);

activateValidation();
activateForm(true);
