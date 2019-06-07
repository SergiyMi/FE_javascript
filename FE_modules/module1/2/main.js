const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let balance;
const countDroid = prompt('Enter countDroid');
if (countDroid === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = countDroid * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    balance = credits - totalPrice;
    alert(`Вы купили ${countDroid} дроидов, на счету осталось ${balance} кредитов.`);
  }
}
