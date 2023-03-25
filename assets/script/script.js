'use strict'

const inputValue = document.getElementById('input-value');
const inputAmount = document.getElementById('input-amount');
const showValue = document.getElementById('value');
const showEl = document.querySelector('show-items')

const clickBtn = document.getElementById('btn');

// console.log(inputValue);
// console.log(inputAmount);
// console.log(clickBtn);



clickBtn.addEventListener('click', function (e){
  e.preventDefault();

  let expense = inputValue.value;
  let amount = inputAmount.value;

  document.getElementById('show-items').style.display = 'block';
})

