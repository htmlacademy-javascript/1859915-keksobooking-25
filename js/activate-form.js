const activateForm = (boolean) => {

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

const mapFilterForm = document.querySelector('.map__filters');
const filters = mapFilterForm.children;
console.log(filters);

const form =  document.querySelector('.ad-form');
const formFieldsetList = form.querySelectorAll('fieldset');


const blockAllForm = () => {
  mapFilterForm.classList.add('ad-form--disabled');
  filters.forEach((element) => element.setAttribute('disabled', true));

  form.classList.add('ad-form--disabled');
  formFieldsetList.forEach((element) => element.setAttribute('disabled', true));
};

export {activateForm, blockAllForm};
