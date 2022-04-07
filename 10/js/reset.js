import {getDefaultSlider} from './slider.js';

const form = document.querySelector('.ad-form');

const resetForm = () => {
  form.reset();
  getDefaultSlider();
};

export {resetForm};
