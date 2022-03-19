const getDisabledForm = function () {
  const mapFilterForm = document.querySelector('.map__filters');
  const form =  document.querySelector('.ad-form');
  //чтобы было видно, что элементы не реагируют
  // mapFilterForm.classList.add('ad-form--disabled');
  // form.classList.add('ad-form--disabled');

  const mapSelectList = mapFilterForm.querySelectorAll('select');
  const mapFieldsetList = mapFilterForm.querySelectorAll('fieldset');

  const formFieldsetList = form.querySelectorAll('.ad-form__element');
  const formInputsList = form.querySelectorAll('input');

  const interactiveElementsArray = [mapSelectList, mapFieldsetList, formFieldsetList, formInputsList];

  interactiveElementsArray.forEach((list) => {
    list.forEach((element) => element.setAttribute('disabled', 'disabled'));
  });

};

export {getDisabledForm};
