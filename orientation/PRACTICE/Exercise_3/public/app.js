let data;
const dropDownClass = document.querySelector('#items');
const options = ['Really', 'Tiptop', 'Seadog', 'Robot'];
const mentorClass = document.querySelector('.mentors');
const submit = document.querySelector('button');
const name = document.querySelector('#name');

window.onload = () => {
  getMentors();
  getOptions();
};

function getMentors() {
//   const http = new XMLHttpRequest();
//   http.open('GET', `http://localhost:3011/api/mentors`);
//   http.onload = () => {
//     data = JSON.parse(http.response);
//   };

//   http.send();
}

submit.addEventListener('click', () => {
  const optionValue = dropDownClass.options[dropDownClass.selectedIndex].value;
  const http = new XMLHttpRequest();
  http.open('POST', `http://localhost:3011/mentor`);
  http.onload = () => {};
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(
    JSON.stringify({
      name: name.value,
      className: optionValue,
    })
  );
});

function getOptions() {
  for (let i = 0; i < 4; i++) {
    const dropDownOption = document.createElement('option');
    dropDownOption.innerHTML = options[i];
    dropDownOption.setAttribute('data-id', options.indexOf(options[i]));
    dropDownClass.appendChild(dropDownOption);
  }
}
