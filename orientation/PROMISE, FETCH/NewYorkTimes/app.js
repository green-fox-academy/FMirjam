const api_key = 'wBAAjzkHXN8o1SdKcuwDAIp0PKmbpmkm';
const request_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${api_key}&q=apollo11`;
const body = document.querySelector('body');

window.onload = () => {
  getArticles();
};

function getArticles() {
  fetch(request_url)
    .then((response) => {
      return response.json();
    })
    .then((article) => {
      let articleList = article.response.docs;
      console.log(articleList);
      for (let i = 0; i < articleList.length; i++) {
        let headLine = document.createElement('h1');
        headLine.innerHTML = articleList[i].headline.main;
        body.appendChild(headLine);
        let snippet = document.createElement('h3');
        snippet.innerHTML = articleList[i].snippet;
        body.appendChild(snippet);
        let publicationDate = document.createElement('p');
        publicationDate.innerHTML = articleList[i].pub_date;
        body.appendChild(publicationDate);
        let a = document.createElement('a');
        a.innerHTML = 'Link';
        body.appendChild(a);
        a.addEventListener('click', () => {
          a.setAttribute('href', articleList[i].web_url);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
