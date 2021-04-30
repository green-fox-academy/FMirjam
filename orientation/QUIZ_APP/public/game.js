let data;
const randomQuestion = document.querySelector('.question');
const buttons = document.querySelectorAll('button');
const answer1 = buttons[0];
const answer2 = buttons[1];
const answer3 = buttons[2];
const answer4 = buttons[3];

window.onload = () => {
  getAQuestion();
};

function getAQuestion() {
  const http = new XMLHttpRequest();
  http.open('GET', `http://localhost:3004/api/game`);
  http.onload = () => {
    data = JSON.parse(http.response);
    console.log(data);
    const questionText = document.createElement('p');
    questionText.innerHTML = data.question;
    randomQuestion.appendChild(questionText);
    let score = 0;
    const scoreBarText = document.querySelector('h1');
    scoreBarText.innerHTML = `SCORE: ${score}`;
    answer1.innerHTML = data.answers[0].answer;
    answer2.innerHTML = data.answers[1].answer;
    answer3.innerHTML = data.answers[2].answer;
    answer4.innerHTML = data.answers[3].answer;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {
        if (data.answers[i].is_correct === 1) {
          buttons[i].classList.add('correct');
          score++;
          scoreBarText.innerHTML = `SCORE: ${score}`;
        } else {
          buttons[i].classList.add('incorrect');
        }
      });
    }
  };
  http.send();
}
