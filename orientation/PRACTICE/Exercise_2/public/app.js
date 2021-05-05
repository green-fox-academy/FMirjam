let data;
const name = document.querySelector('#name');
const amount = document.querySelector('#amount');
const bid = document.querySelector('button');
const p = document.querySelector('p');
const list = document.querySelector('.list');
const dropDown = document.querySelector('#items');

window.onload = () => {
  getBids();
};

function getBids() {
  const http = new XMLHttpRequest();
  http.open('GET', `http://localhost:3010/api/items`);
  http.onload = () => {
    data = JSON.parse(http.response);
    for (let i = 0; i < data.length; i++) {
      const dropDownOption = document.createElement('option');
      dropDownOption.innerHTML = data[i].title;
      dropDownOption.setAttribute('data-id', data[i].id);
      dropDown.appendChild(dropDownOption);
      const li = document.createElement('li');
      li.innerHTML = `${data[i].title} (highest bid: ${data[i].highestBid}, ${data[i].highestBidderName})`;
      list.appendChild(li);
    }
  };
  http.send();
}

bid.addEventListener('click', () => {
  const id = dropDown.options[dropDown.selectedIndex].getAttribute('data-id');
  const http = new XMLHttpRequest();
  http.open('POST', `http://localhost:3010/api/items/${id}/bids`);
  http.onload = () => {
    if (http.status === 400) {
      p.innerHTML = 'Your bid is below the highest bid!';
    } else if (http.status === 404) {
      p.innerHTML = 'The auction is over!';
    } else {
      p.innerHTML = 'Successfull!';
    }
  };
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(
    JSON.stringify({
      name: name.value,
      amount: amount.value,
    })
  );
});
