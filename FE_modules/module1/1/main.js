const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
message = prompt('Enter password please!');
if (message === null) {
  message = 'Отменено пользователем!';
} else if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
