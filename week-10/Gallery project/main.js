const images = [1, 2, 3, 4, 5, 6, 7, 8];
let currentImage = 1;
let showedPicture = document.querySelector('.photo');
let thumbnailImages = document.querySelectorAll('._photo');

function previousImage() {
  if (currentImage === 1) {
    currentImage = 8;
  } else {
    currentImage--;
  }
  showImage();
}

function nextImage() {
  if (currentImage === 8) {
    currentImage = 1;
  } else {
    currentImage++;
  }
  showImage();
}

function showImage(pictureNumber) {
  if (pictureNumber) {
    currentImage = pictureNumber;
  }
  showedPicture.src = `/img/${currentImage}.JPG`;
  handleActiveClassImage();
}

function handleActiveClassImage() {
  let currentIndex = images.indexOf(currentImage);
  let thumbnailImage = thumbnailImages[currentIndex];
  for (let i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].classList.remove('active');
  }
  thumbnailImage.classList.add('active');
}

let pictureDetails = {1: {
  header: 'Text',
  subtext: 'Subtext'
}}
