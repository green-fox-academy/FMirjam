const submit = document.querySelector('button');
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer_1');
const answer2 = document.querySelector('#answer_2');
const answer3 = document.querySelector('#answer_3');
const answer4 = document.querySelector('#answer_4');
const radio = document.getElementsByName('radio');

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
