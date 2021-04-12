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
      let postId = posts[i]['id'];
      let div = document.createElement('div');
      div.classList.add('postHolder');
      div.classList.add(`div${postId}`);
      let ul = document.createElement('ul');
      ul.classList.add(`ul${postId}`);
      let buttons = document.createElement('div');
      buttons.classList.add('buttonContainer');
      for (let j = 0; j < posts.length; j++) {
        if (Object.keys(posts[j]) === 'score') {
        } else if (Object.keys(posts[j]) === 'user_name') {
        } else{
            
        }
      }
    }
  };
  http.send();
}
