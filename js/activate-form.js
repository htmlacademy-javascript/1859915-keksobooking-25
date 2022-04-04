const activateForm = (boolean) => {
  const mapFilterForm = document.querySelector('.map__filters');
  const form =  document.querySelector('.ad-form');

  const mapSelectList = mapFilterForm.querySelectorAll('select');
  const mapFieldsetList = mapFilterForm.querySelectorAll('fieldset');

  const formFieldsetList = form.querySelectorAll('.ad-form__element');
  const formInputsList = form.querySelectorAll('input');

  const interactiveElementsArray = [mapSelectList, mapFieldsetList, formFieldsetList, formInputsList];

  if (boolean) {
    mapFilterForm.classList.remove('ad-form--disabled');
    form.classList.remove('ad-form--disabled');

    interactiveElementsArray.forEach((list) => {
      list.forEach((element) => element.removeAttribute('disabled'));
    });
  } else {
    mapFilterForm.classList.add('ad-form--disabled');
    form.classList.add('ad-form--disabled');

    interactiveElementsArray.forEach((list) => {
      list.forEach((element) => element.setAttribute('disabled', true));
    });
  }
};

export {activateForm};
