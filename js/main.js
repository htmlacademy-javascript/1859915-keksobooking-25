/*  if (min > max) {
    min = Math.ceil(max);
    max = Math.floor(min);
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
  }
*/

//Функция для вывода случайного целого числа из диапазона
function getRandomInt (min, max) {

  if ((min >= max) || (min < 0)) {
    return 'Диапазон задан неверно';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(3,5));

//Функция для вывода случайной координаты из диапазона (задано количество знаков после запятой)
function getRandomCoordinate (min, max, decimals) {
  if ((min >= max) || (min < 0)) {
    return 'Диапазон для координаты задан неверно';
  }

  let coordinate = Math.random() * (max - min + 1) + min;
  return coordinate.toFixed(decimals);
}


function getRandomCoordinate2 (min, max, decimals) {
  if ((min >= max) || (min < 0)) {
    return 'Диапазон для координаты задан неверно';
  }

  let coordinate;

  if ((max - min) < 1) {
    coordinate = Math.random() * (max - min) + min;
  } else {
    coordinate = Math.random() * (max - min + 1) + min;
  }
  return coordinate.toFixed(decimals);
}
