const submit = document.querySelector('button');
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer_1');
const answer2 = document.querySelector('#answer_2');
const answer3 = document.querySelector('#answer_3');
const answer4 = document.querySelector('#answer_4');
const radio = document.getElementsByName('radio');
const manageContainer = document.querySelector('.question-container');
let questions;

submit.addEventListener('click', () => {
  const http = new XMLHttpRequest();
  http.open('POST', `http://localhost:3004/api/questions`);
  http.onload = () => {};
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(
    JSON.stringify({
      question: question.value,
      answers: [
        { answer_1: answer1.value, is_correct: radio[0].checked ? 1 : 0 },
        { answer_2: answer2.value, is_correct: radio[1].checked ? 1 : 0 },
        { answer_3: answer3.value, is_correct: radio[2].checked ? 1 : 0 },
        { answer_4: answer4.value, is_correct: radio[3].checked ? 1 : 0 },
      ],
    })
  );
});

window.onload = () => {
  getQuestions();
};

function getQuestions() {
  manageContainer.innerHTML = '';
  const http = new XMLHttpRequest();
  http.open('GET', `http://localhost:3004/api/questions`);
  http.onload = () => {
    questions = JSON.parse(http.response);
    for (let i = 0; i < questions.length; i++) {
      const questionList = document.createElement('div');
      questionList.classList.add('questionList');
      const questionTitle = document.createElement('p');
      questionTitle.classList.add('title');
      questionTitle.innerHTML = questions[i].question;
      questionList.appendChild(questionTitle);
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete');
      deleteButton.innerHTML = 'delete';
      deleteQuestion(questions[i].id, deleteButton);
      questionList.appendChild(deleteButton);
      manageContainer.appendChild(questionList);
    }
  };
  http.send();
}

function deleteQuestion(id, button) {
  button.addEventListener('click', () => {
    const http = new XMLHttpRequest();
    http.open('DELETE', `http://localhost:3004/api/questions/${id}`);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onload = () => {
      getQuestions();
    };
    http.send();
  });
}
