const chooseFile = document.querySelector('#file');
const imgPreview = document.querySelector('.vehicle--photos--photoDiv');

chooseFile.addEventListener('change', () => {
  getImgData();
});
const getImgData = () => {
  const files = chooseFile.files[0];

  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener('load', function () {
      imgPreview.style.display = 'block';
      imgPreview.innerHTML = '<img src="' + this.result + '" />';
    });
  }
};
