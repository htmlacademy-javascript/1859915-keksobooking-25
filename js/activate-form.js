import {blockSlider} from './slider.js';
const filtersForm = document.querySelector('.map__filters');
const filters = filtersForm.children;
const filtersArray = Array.from(filters);

const form = document.querySelector('.ad-form');
const formFieldsetList = form.querySelectorAll('fieldset');

const blockAllForms = () => {
  filtersForm.classList.add('ad-form--disabled');
  filtersArray.forEach((element) => element.setAttribute('disabled', true));

  form.classList.add('ad-form--disabled');
  formFieldsetList.forEach((element) => element.setAttribute('disabled', true));
  blockSlider(true);
};

const unblockFilters = () => {
  filtersForm.classList.remove('ad-form--disabled');
  filtersArray.forEach((element) => element.removeAttribute('disabled'));
};

const unblockForm = () => {
  form.classList.remove('ad-form--disabled');
  formFieldsetList.forEach((element) => element.removeAttribute('disabled'));
  blockSlider(false);
};
export {blockAllForms, unblockFilters, unblockForm};
