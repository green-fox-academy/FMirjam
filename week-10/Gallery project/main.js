const imageIndex = [1, 0];
showImages(1, 0);

function plusImage(n, no) {
  showImages((imageIndex[no] += n), no);
}

function currentImage(n) {
  showImages((imageIndex = n));
}

function showImages(n, no) {
  let i;
  let x = document.getElementsByClassName('showedpicture');
  let smallImages = document.getElementsByClassName('_photo');
  if (n > x.length) {
    imageIndex[no] = 1;
  }
  if (n < 1) {
    imageIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  for (i = 0; i < smallImages.length; i++) {
    smallImages[i].className = smallImages[i].className.replace('actve', '');
  }

  x[imageIndex[no] - 1].style.display = 'block';
  smallImages[imageIndex - 1].className += 'active';
}
