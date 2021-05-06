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
  const http = new XMLHttpRequest();
  http.open('GET', `http://localhost:3011/mentors`);
  http.onload = () => {
    data = JSON.parse(http.response);
    for (let i = 0; i < data.length; i++) {
      const a = document.createElement('a');
      a.innerHTML = data[i].name;
      a.setAttribute('href', `http://localhost:3011/mentor/${data[i].id}`);
      const br = document.createElement('br');
      mentorClass.appendChild(br);
      mentorClass.appendChild(a);
    }
  };
  http.send();
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
  for (let i = 0; i < options.length; i++) {
    const dropDownOption = document.createElement('option');
    dropDownOption.innerHTML = options[i];
    dropDownOption.setAttribute('data-id', options.indexOf(options[i]));
    dropDownClass.appendChild(dropDownOption);
  }
}
