function insert(number){
  document.getElementById('result').innerHTML += number;
}

function reset(){
  document.getElementById('result'). innerHTML = '';
}

function back() {
  let result = document.getElementById('result').innerHTML;

  document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function calculate() {
  let result = document.getElementById('result').innerHTML;

  if(result) {
    document.getElementById('result').innerHTML = eval(result);
  } else {
    document.getElementById('result').innerHTML = '0'
  }
}