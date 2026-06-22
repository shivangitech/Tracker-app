const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const addBtn = document.getElementById('add-btn');

// Default Transactions for display
let transactions = [
  { id: 1, text: 'Pocket Money', amount: 2000 },
  { id: 2, text: 'Books', amount: -500 }
];

function updateValues() {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  balance.innerText = `₹${total}`;
  money_plus.innerText = `+₹${income}`;
  money_minus.innerText = `-₹${expense}`;
}

function init() {
  list.innerHTML = '';
  transactions.forEach(t => {
    const sign = t.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.classList.add(t.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `${t.text} <span>${sign}₹${Math.abs(t.amount)}</span>`;
    list.appendChild(item);
  });
  updateValues();
}

addBtn.addEventListener('click', () => {
  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a reason and amount');
    return;
  }
  const transaction = {
    id: Math.floor(Math.random() * 100000000),
    text: text.value,
    amount: +amount.value
  };
  transactions.push(transaction);
  init();
  text.value = '';
  amount.value = '';
});

init();
