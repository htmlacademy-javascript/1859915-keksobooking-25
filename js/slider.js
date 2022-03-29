const sliderElement = document.querySelector('.ad-form__slider');
const typeInput = document.querySelector('#type');
const priceInput = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  start: [5000],
  step: 100,
  range: {
    'min': [1000],
    'max' : [10000],
  },
  format: {
    to: function (value) {
      return parseInt(value);
    },
    from: function (value) {
      return parseInt(value);
    },
  },
  connect: 'lower',
})

priceInput.value = 5000; //???

sliderElement.noUiSlider.on('update', () => {
  priceInput.value = sliderElement.noUiSlider.get();

})

const sliderOptions = {
  bungalow: {
    range: {
      min: 0,
      max: 100000,
    },
    start: 0,
    step: 50,
  },
  flat: {
    range: {
      min: 1000,
      max: 100000,
    },
    start: 1000,
    step: 100,
  },
  hotel: {
    range: {
      min: 3000,
      max: 100000,
    },
    start: 3000,
    step: 100,
  },
  house: {
    range: {
      min: 5000,
      max: 100000,
    },
    start: 5000,
    step: 100,
  },
  palace: {
    range: {
      min: 10000,
      max: 100000,
    },
    start: 10000,
    step: 500,
  },
}

typeInput.addEventListener('change', () => {
  const type = typeInput.value;
  sliderElement.noUiSlider.updateOptions(sliderOptions[type])
})
