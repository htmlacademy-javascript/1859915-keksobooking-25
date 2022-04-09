import {getDefaultSlider} from './slider.js';

const form = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');

const resetAllForms = () => {
  filtersForm.reset();
  form.reset();
  getDefaultSlider();
};

export {resetAllForms};
