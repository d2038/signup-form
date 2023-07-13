const inputs = {
  first: document.querySelector('#password'),
  second: document.querySelector('#confirmPassword')
}
const form = document.getElementById("signup-form");
const div = document.querySelector('.password-info>:first-child');

console.log(div);

for (const key in inputs) {
  if (inputs.hasOwnProperty(key)) {
    const input = inputs[key];

    input.addEventListener('focusout', checkLazy);
    input.addEventListener('keyup', checkAgressive);  
  }  
}

function checkLazy(e) {
  if (e.target.value === '') {
    e.target.classList.remove('match');
  }

  if (inputs.first.value === '' || inputs.second.value === '') {    
    return;
  }

  if (inputs.first.value !== inputs.second.value) {
    inputs.first.classList.remove('match');
    inputs.second.classList.remove('match');   
    inputs.first.classList.add('error');
    inputs.second.classList.add('error');
    div.classList.add('error');
    form.addEventListener("submit", preventSubmit);
  }  
}

function checkAgressive(e) {  
  if (inputs.first.value === '' && inputs.second.value === '') {
    for (const key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        const input = inputs[key];
        input.classList.remove('match');
        input.classList.remove('error');
      }
    }
    div.classList.remove('error');
    return;
  }

  if (e.target === inputs.first && inputs.second.value === '' && !inputs.first.classList.contains("error")) {
    inputs.first.classList.add('match');
    return;
  } 

  if (e.target === inputs.second && inputs.first.value === '' && !inputs.second.classList.contains("error")) {
    inputs.second.classList.add('match');
    return;
  }

  if (inputs.first.value === inputs.second.value) {
    inputs.first.classList.remove('error');
    inputs.second.classList.remove('error');
    div.classList.remove('error');
    inputs.first.classList.add('match');
    inputs.second.classList.add('match');
    form.removeEventListener("submit", preventSubmit);
  }
}

function preventSubmit(event) {
  event.preventDefault();
}