const getData = (onSuccess, onError) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then ((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError('Ошибка загрузки данных с сервера, попробуйте обновить страницу');
      }
    })
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => onError('Произошла ошибка на сервере, попробуйте ещё раз'));
};


const sendData = (formData, onSuccess, onError) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
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
