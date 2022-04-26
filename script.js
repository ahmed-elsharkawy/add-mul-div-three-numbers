let result = document.getElementById('result');
let summision = document.getElementById("summision");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");

let array = [];
getNumbers();

function getNumbers() {
  for (let i = 0; i < 3; i++) {
    let currentNum = parseInt(prompt("Enter a number"));
    if (currentNum || 0) {
      array.push(currentNum);
    }
  }
  result.classList.remove('hide')
  calculation();
}

function calculation() {
  summision.innerHTML = `${formatResult(sum, '+')}`;
  multiplication.innerHTML = `${formatResult(mul, '*')}`;
  division.innerHTML = `${formatResult(div, '/')}`;
}

function formatResult(op, sym){
  let res = `${array[0]} ${sym} ${array[1]} ${sym} ${array[2]} = ${op()}`;
  return res;
}

function sum() {
  let s = 0;
  for (let i = 0; i < array.length; i++) {
    s += array[i];
  }
  return s;
}

function mul() {
  let m = array[0];
  for (let i = 1; i < array.length; i++) {
    m *= array[i];
  }
  return m;
}

function div() {
  let d = array[0];
  for (let i = 1; i < array.length; i++) {
    d /= array[i];
  }
  return d;
}