const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', () => {
  setTimeout(() => {
    paragraph.innerText = '2 seconds ellapsed';
  }, 2000);
});
