let input;
const numbers = [];
let total = 0;
input = prompt("Enter number > 0, please!");
if (!input) {
  alert("Cansel user!");
} else {
  while (input) {
    if (Number.isNaN(Number(input))) {
      alert("Было введено не число, попробуйте еще раз");
    } else {
      numbers.push(Number(input));
    }
    input = prompt("Enter number > 0, please!");
  }
}
if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
