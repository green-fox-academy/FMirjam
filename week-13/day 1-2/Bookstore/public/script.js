const apiUrl = 'http://localhost:3000/fulldata';
const tableBody = document.querySelector('tbody');

function getFullData() {
  let http = new XMLHttpRequest();
  http.open('GET', apiUrl, true);
  http.onload = () => {
    let data = JSON.parse(http.responseText);
    for (let i = 0; i < data.length; i++) {
      let tr = document.createElement('tr');
      let tdBookTitle = document.createElement('td');
      tdBookTitle.innerHTML = data[i].book_name;
      tr.appendChild(tdBookTitle);
      let tdAuthor = document.createElement('td');
      tdAuthor.innerHTML = data[i].aut_id;
      tr.appendChild(tdAuthor);
      let tdCategory = document.createElement('td');
      tdCategory.innerHTML = data[i].cate_id;
      tr.appendChild(tdCategory);
      let tdPublisher = document.createElement('td');
      tdPublisher.innerHTML = data[i].pub_id;
      tr.appendChild(tdPublisher);
      let tdPrice = document.createElement('td');
      tdPrice.innerHTML = data[i].book_price;
      tr.appendChild(tdPrice);

      tableBody.appendChild(tr);
    }
  };
  http.send();
}

window.onload = () => {
  getFullData();
};
