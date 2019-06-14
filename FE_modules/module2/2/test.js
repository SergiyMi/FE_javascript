const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
let inputUser;
do {
  inputUser = prompt("Enter the password!");
  if (!inputUser) {
    alert("Cansel!");
    break;
  } else if (passwords.includes(inputUser)) {
    alert("Добро пожаловать!");
    break;
  } else {
    attemptsLeft -= 1;
    if (attemptsLeft > 0) {
      alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else {
        alert("У вас закончились попытки, аккаунт заблокирован!");
    }
  }
} while (attemptsLeft > 0);
