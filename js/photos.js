const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('#avatar');
const avatarPreview  = document.querySelector('.ad-form-header__preview').querySelector('img');

const imageChooser = document.querySelector('#images');
const imagePreviewContainer  = document.querySelector('.ad-form__photo');
const imagePreview = document.createElement('img');
imagePreview.setAttribute('class', 'hidden');
imagePreview.setAttribute('src', '#');
imagePreview.setAttribute('width', '100%');
imagePreview.setAttribute('heigth', '100%');
imagePreviewContainer.appendChild(imagePreview);

const chooseFiles = (input, previewContainer) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewContainer.src = URL.createObjectURL(file);
  }
};

avatarChooser.addEventListener('change', () => {
  chooseFiles(avatarChooser, avatarPreview);
});

imageChooser.addEventListener('change', () => {
  imagePreview.removeAttribute('class');
  chooseFiles(imageChooser, imagePreview);
});
