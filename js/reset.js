/**
 * функция сброса формы и карты
 * сброс карты
 * 1. сет вью
 * 2. балун на место
 * 3. обновить строку адреса
 * 4. скрыть балуны на карте
 *
 * сброс формы
 * 1. ресет форм
 * 2. фпдейт слайдера
 * 3. адресная строка заполнена / есть в карте
 *
 */
import {getDefaultSlider} from './slider.js';

const form = document.querySelector('.ad-form');

const resetForm = () => {
  form.reset();
  getDefaultSlider();
}

export {resetForm};
