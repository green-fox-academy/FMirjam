//   1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent

//   2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

//   3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored

let section = document.querySelector('section');

for (let i = 2; i <= 100; i++) {
  let div = document.createElement('div');
  div.innerHTML = i;
  if (isPrime(i) === true) {
    setTimeout(() => {
      div.classList.add('prime');
    }, i * 100);
  } else {
    setTimeout(() => {
      div.classList.add('not-prime');
    }, i * 100);
  }
  section.appendChild(div);
}

function isPrime(number) {
  let sqrtnum = Math.floor(Math.sqrt(number));
  let prime = number != 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
