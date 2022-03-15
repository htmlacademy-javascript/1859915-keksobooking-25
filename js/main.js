import {createOffers} from './data.js';
import  {renderPopup} from './popup.js';

const SIMILAR_OFFERS_COUNT = 10;

const offersData = createOffers(SIMILAR_OFFERS_COUNT);
renderPopup(offersData[6]);


