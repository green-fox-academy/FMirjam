const postContainer = document.querySelector('.posts');
const http = new XMLHttpRequest();
const userId = 2;

window.onload = () => {
  getPosts();
};

let posts;

function getPosts() {
  postContainer.innerHTML = '';
  http.open('GET', `http://localhost:3001/posts`);

  http.onload = () => {
    posts = JSON.parse(http.response);
    for (let i = 0; i < posts.length; i++) {
      let div = document.createElement('div');
      div.classList.add('postHolder');
      postContainer.appendChild(div);
      let buttonDiv = document.createElement('div');
      buttonDiv.classList.add('buttonDiv');
      div.appendChild(buttonDiv);
      let postDetailsUl = document.createElement('ul');
      let titleP = document.createElement('p');
      titleP.innerHTML = posts[i].title;
      let timeStampP = document.createElement('p');
      timeStampP.innerHTML = posts[i].timestamp;
      let userName = document.createElement('p');
      userName.innerHTML = posts[i].user_name;
      postDetailsUl.appendChild(titleP);
      postDetailsUl.appendChild(userName);
      postDetailsUl.appendChild(timeStampP);
      div.appendChild(postDetailsUl);
      let score = document.createElement('li');
      score.innerHTML = posts[i].score;
      buttonDiv.appendChild(score);
      upVote = document.createElement('img');
      upVote.setAttribute('src', '../assets/upvote.png');
      downVote = document.createElement('img');
      downVote.setAttribute('src', '../assets/downvote.png');
      buttonUp = document.createElement('button');
      buttonUp.classList.add('buttonUp');
      upVoteHandler(posts[i].id, buttonUp);
      buttonDown = document.createElement('button');
      buttonDown.classList.add('buttonDown');
      downVoteHandler(posts[i].id,buttonDown)
      buttonUp.appendChild(upVote);
      buttonDown.appendChild(downVote);
      buttonDiv.appendChild(buttonUp);
      buttonDiv.appendChild(buttonDown);
    }
  };
  http.send();
}

function upVoteHandler(postId, buttonUp) {
  buttonUp.addEventListener('click', () => {
    const http = new XMLHttpRequest();
    http.open('PUT', `http://localhost:3001/posts/${postId}/upvote`);
    http.setRequestHeader('userid', userId);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onload = () => {
      getPosts();
    };
    http.send();
  });
}
function downVoteHandler(postId, buttonDown) {
  buttonDown.addEventListener('click', () => {
    const http = new XMLHttpRequest();
    http.open('PUT', `http://localhost:3001/posts/${postId}/downvote`);
    http.setRequestHeader('userid', userId);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onload = () => {
      getPosts();
    };
    http.send();
  });
}
