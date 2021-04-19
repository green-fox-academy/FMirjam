const userId = 2;
const postId = 1;
const submit = document.querySelector('button');
const title = document.querySelector('#title');
const url = document.querySelector('#url');
const http = new XMLHttpRequest();

submit.addEventListener('click', () => {
  console.log(title.value);
  console.log(url.value);

  http.open('PUT', `http://localhost:3001/posts/${postId}`);
  http.setRequestHeader('userid', userId);
  http.setRequestHeader('Content-Type', 'application/json');
  http.onload = () => {
  };
  http.send(JSON.stringify({ title: title.value, url: url.value }));
});