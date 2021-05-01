let data;
let score = 0;
const randomQuestion = document.querySelector('.question');
const container = document.querySelector('.container');
const answers = document.querySelector('.answers');

window.onload = () => {
  getAQuestion();
  setInterval(() => {
    clearQuestion();
    getAQuestion();
  }, 6000);
};

function getAQuestion() {
  const http = new XMLHttpRequest();
  http.open('GET', `http://localhost:3004/api/game`);
  http.onload = () => {
    data = JSON.parse(http.response);
    const questionText = document.createElement('p');
    questionText.innerHTML = data.question;
    randomQuestion.appendChild(questionText);
    const scoreBarText = document.querySelector('h1');
    scoreBarText.innerHTML = `SCORE: ${score}`;
    for (let i = 0; i < data.answers.length; i++) {
      const button = document.createElement('button');
      button.innerHTML = data.answers[i].answer;
      button.addEventListener('click', () => {
        if (data.answers[i].is_correct === 1) {
          button.classList.add('correct');
          console.log('Kedves Tomi SE');
          score++;
          scoreBarText.innerHTML = `SCORE: ${score}`;
        } else {
          button.classList.add('incorrect');
        }
      });
      button.classList.remove('correct');
      answers.appendChild(button);
    }
  };
  http.send();
}

function clearQuestion() {
  randomQuestion.innerHTML = '';
  answers.innerHTML = '';
}
