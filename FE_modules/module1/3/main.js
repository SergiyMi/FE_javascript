const message = prompt('Enter your country');
const forChina = 100;
const forSouthAmerica = 250;
const forAustralia = 170;
const forIndia = 80;
const forJamaica = 120;
if (message === null) {
  alert('Abort user`s');
} else if (message !== /[^a-z]/) {
  alert('В вводимом названии страны есть не латинские буквы!');
} else {
  switch (message.toLowerCase()) {
    case 'china':
      alert(`Доставка в ${message.toLowerCase()} будет стоить ${forChina} кредитов`);
      break;

    case 'southamerica':
      alert(`Доставка в ${message.toLowerCase()} будет стоить ${forSouthAmerica} кредитов`);
      break;

    case 'australia':
      alert(`Доставка в ${message.toLowerCase()} будет стоить ${forAustralia} кредитов`);
      break;

    case 'india':
      alert(`Доставка в ${message.toLowerCase()} будет стоить ${forIndia} кредитов`);
      break;

    case 'jamaica':
      alert(`Доставка в ${message.toLowerCase()} будет стоить ${forJamaica} кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна или в вводимом названии страны есть не латинские буквы!');
      break;
  }
}
