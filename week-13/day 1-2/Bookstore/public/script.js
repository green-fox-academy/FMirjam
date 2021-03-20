const tableBody = document.querySelector('tbody');
const button = document.querySelector('button');
const category = document.getElementById('category');
const publisher = document.getElementById('publisher');
const plt = document.getElementById('plt');
const pgt = document.getElementById('pgt');

button.addEventListener('click', () => {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  getFullData();
});

function getFullData() {
  let http = new XMLHttpRequest();
  http.open('GET', filterUrl(), true);
  http.onload = () => {
    let data = JSON.parse(http.responseText);
    for (let i = 0; i < data.length; i++) {
      let tr = document.createElement('tr');
      let tdBookTitle = document.createElement('td');
      tdBookTitle.innerHTML = data[i].book_name;
      tr.appendChild(tdBookTitle);
      let tdAuthor = document.createElement('td');
      tdAuthor.innerHTML = data[i].aut_name;
      tr.appendChild(tdAuthor);
      let tdCategory = document.createElement('td');
      tdCategory.innerHTML = data[i].cate_descrip;
      tr.appendChild(tdCategory);
      let tdPublisher = document.createElement('td');
      tdPublisher.innerHTML = data[i].pub_name;
      tr.appendChild(tdPublisher);
      let tdPrice = document.createElement('td');
      tdPrice.innerHTML = data[i].book_price;
      tr.appendChild(tdPrice);

      tableBody.appendChild(tr);
    }
  };
  http.send();
}

function filterUrl() {
  let categoryValue = category.value;
  let publisherValue = publisher.value;
  let pltValue = plt.value;
  let pgtValue = pgt.value;
  let isFirstSearchField = true;
  let url = 'http://localhost:3000/fulldata';
  if (categoryValue) {
    url = url + `?category=${categoryValue}`;
    isFirstSearchField = false;
  }
  if (publisherValue) {
    if (!isFirstSearchField) {
      url = url + `&publisher=${publisherValue}`;
    } else {
      url = url + `?publisher=${publisherValue}`;
      isFirstSearchField = false;
    }
  }
  if (pltValue) {
    if (!isFirstSearchField) {
      url = url + `&plt<${pltValue}`;
    } else {
      url = url + `?plt<${pltValue}`;
      isFirstSearchField = false;
    }
  }
  if (pgtValue) {
    if (!isFirstSearchField) {
      url = url + `&pgt>${pltValue}`;
    } else {
      url = url + `?pgt>${pltValue}`;
      isFirstSearchField = false;
    }
  }
  return url;
}

window.onload = () => {
  getFullData();
};
