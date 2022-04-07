const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('#avatar');
const avatarPreview  = document.querySelector('.ad-form-header__preview').querySelector('img');


avatarChooser.addEventListener('change', () => {
  const avatar = avatarChooser.files[0];
  const avatarName = avatar.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => avatarName.endsWith(it));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatar);
  }
});

const imagesChooser = document.querySelector('#images'); //input
const imagesPreviewContainer  = document.querySelector('.ad-form__photo'); //div


imagesChooser.addEventListener('change', () => {
  const file =  imagesChooser.files[0];
  const img = document.createElement('img');
  img.setAttribute('src', '#');
  img.setAttribute('width', '100%');
  img.setAttribute('heigth', '100%');
  img.src = URL.createObjectURL(file);
  imagesPreviewContainer.appendChild(img);
});
