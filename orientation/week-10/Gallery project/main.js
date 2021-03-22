const images = [1, 2, 3, 4, 5, 6, 7, 8];
let currentImage = 1;
let showedPicture = document.querySelector('.photo');
let thumbnailImages = document.querySelectorAll('._photo');
let photoHeader = document.querySelector('h2');
let photoSubText = document.querySelector('p');
let pictureDetails = {
  1: {
    header: 'New York',
    subtext: 'Times Square',
  },
  2: {
    header: 'New York',
    subtext: 'Grand Central Station',
  },
  3: {
    header: 'New York',
    subtext: 'Empire State Building',
  },
  4: {
    header: 'Cuba',
    subtext: 'Oldtimer',
  },
  5: {
    header: 'Cuba',
    subtext: 'Colorful buildings',
  },
  6: {
    header: 'Cuba',
    subtext: 'José Martí Memorial',
  },
  7: {
    header: 'Cuba',
    subtext: 'Matanzas',
  },
  8: {
    header: 'Cuba',
    subtext: 'Sunset',
  },
};


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
  changeText();
}

function handleActiveClassImage() {
  let currentIndex = images.indexOf(currentImage);
  let thumbnailImage = thumbnailImages[currentIndex];
  for (let i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].classList.remove('active');
  }
  thumbnailImage.classList.add('active');
}

function changeText(){
let currentHeader = pictureDetails[currentImage]['header'];
let currentSubtext = pictureDetails[currentImage]['subtext'];
photoHeader.innerHTML = currentHeader;
photoSubText.innerHTML = currentSubtext;
}