const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
let inputUser;
while (attemptsLeft > 0) {
  inputUser = prompt("Enter the password!");
  if (!inputUser) {
    alert("Cansel");
    break;
  }
  if (passwords.includes(inputUser)) {
    alert("Добро пожаловать!");
    break;
  }
  attemptsLeft -= 1;
  if (attemptsLeft > 0) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
  if (attemptsLeft <= 0) {
    alert("У вас закончились попытки, аккаунт заблокирован!");
    break;
  }
}
