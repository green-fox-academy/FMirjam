let data;
const randomQuestion = document.querySelector('.question');

window.onload = () => {
  getAQuestion();
};

function getAQuestion() {
  const http = new XMLHttpRequest();
  http.open('GET', `http://localhost:3004/api/game`);
  http.onload = () => {
    data = JSON.parse(http.response);
    const questionText = document.createElement('p');
    questionText.innerHTML = data.question;
    randomQuestion.appendChild(questionText);
  };
  http.send();
}
