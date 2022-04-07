/**
 * Функция для подбора склонения существительного в словосочетании с числительным
 * @param {Integer} value — числительное
 * @param {Array} words — массив вариантов склонений
 * @return {String} - существительное в верном склонении
 */

function numWord (value, words) {
  const num = value % 10;
  if (value > 10 && value < 20) {return words[2];}
  if (num > 1 && num < 5) {return words[1];}
  if (num === 1) {return words[0];}
  return words[2];
}

const isEscapeKey = (evt) => evt.key === 'Escape';

export {numWord, isEscapeKey};

