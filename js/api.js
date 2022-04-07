/*
получаем ответ с сервера
если ок - отрисовать пины и разблокировать фильтры
если не ок - показать сообщение и оставить фильтры disabled
*/


const getData = (onSuccess, onError) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then ((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError('Ошибка загрузки данных с сервера, попробуйте обновить страницу');//не будет ли выводиться сообщение дважды
      }
    })
    .then((offers) => {
      onSuccess(offers);
    }) //как вставить сюда и разблокировку фильтров? единая функция?
    .catch(() => onError('Произошла ошибка на сервере, попробуйте ещё раз'));
};


const sendData = (formData, onSuccess, onError) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooing',
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => onError());
};

export {getData, sendData};
