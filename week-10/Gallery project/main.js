const imageIndex = [1, 0];
showImages(1, 0);

function plusImage(n, no) {
  showImages((imageIndex[no] += n), no);
}


function showImages(n, no) {
  let i;
  let x = document.getElementsByClassName('showedpicture');
  let smallImages = document.getElementsByClassName('._photo');
  if (n > x.length) {
    imageIndex[no] = 1;
  }
  if (n < 1) {
    imageIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[imageIndex[no] - 1].style.display = 'block';
  
}

