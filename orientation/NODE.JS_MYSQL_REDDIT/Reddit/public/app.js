const container = document.querySelector('.container');
let http = new XMLHttpRequest();

window.onload = () => {
  getPosts();
};

let posts;

function getPosts() {
  http.open('GET', `http://localhost:3001/posts`);

  http.onload = () => {
    posts = JSON.parse(http.response);
    console.log(posts);

    for (let i = 0; i < posts.length; i++) {
      let div = document.createElement('div');
      div.classList.add('postHolder');
      container.appendChild(div);
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
      buttonUp.addEventListener('click', () => {})
      buttonUp.classList.add('buttonUp');
      buttonDown = document.createElement('button');
      buttonDown.addEventListener('click', () => {})
      buttonDown.classList.add('buttonDown');
      buttonUp.appendChild(upVote);
      buttonDown.appendChild(downVote);
      buttonDiv.appendChild(buttonUp);
      buttonDiv.appendChild(buttonDown);
    }
  };
  http.send();
}

function upVote(){}
function downVote(){}