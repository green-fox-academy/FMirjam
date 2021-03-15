window.onload = () => {
  const api_key = 'wBAAjzkHXN8o1SdKcuwDAIp0PKmbpmkm';
  const request_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${api_key}&q=apollo11`;

  let http = new XMLHttpRequest();

  http.open('GET', request_url, true);

  http.onload = () => {
    if (http.readyState == 4 && http.status == 200) {
      let data = JSON.parse(http.responseText).response.docs;
      const body = document.querySelector('body');
      for (let i = 0; i < data.length; i++) {
        let headLine = document.createElement('h1');
        headLine.innerHTML = data[i].headline.main;
        body.appendChild(headLine);
        let snippet = document.createElement('h3');
        snippet.innerHTML = data[i].snippet;
        body.appendChild(snippet);
        let publicationDate = document.createElement('p');
        publicationDate.innerHTML = data[i].pub_date;
        body.appendChild(publicationDate);
        let a = document.createElement('a');
        a.setAttribute = ('href', data[i].web_url);
        a.innerHTML = 'Link';
        body.appendChild(a);
      }
    }
  };
  http.send();
};
