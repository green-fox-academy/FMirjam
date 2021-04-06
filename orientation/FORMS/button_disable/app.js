const inputs = document.querySelectorAll('input');
const petButtons = document.querySelectorAll('input[name="pet"]');
const catFactsButtons = document.querySelectorAll('input[name="signing"]');
const loveCatButton = document.querySelector('.cats');
const signUpButton = document.querySelector('.sign');

loveCatButton.disabled = true;
signUpButton.disabled = true;

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', () => {
    if (petButtons[0].checked || petButtons[1].checked) {
      signUpButton.disabled = false;
    } else {
      signUpButton.disabled = true;
    }
    if (petButtons[1].checked && catFactsButtons[0].checked) {
      loveCatButton.disabled = false;
      loveCatButton.addEventListener('click', () => {
        alert(`Thank you, you've successfully signed up for cat facts`);
      });
    } else {
      loveCatButton.disabled = true;
    }
    if (petButtons[2].checked && catFactsButtons[1].checked) {
      signUpButton.disabled = false;
      loveCatButton.disabled = true;
      signUpButton.addEventListener('click', () => {
        alert(`Sigh, we still added you to the cat facts list`);
      });
    }
  });
}
