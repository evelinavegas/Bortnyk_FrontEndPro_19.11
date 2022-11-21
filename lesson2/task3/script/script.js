// запитати у користувача кількість годин;
// порахувати, скільки секунд у цій кількості годин;
// записати обчислене значення у змінну;
// вивести цю змінну користувачеві через alert.

const hours = prompt('Enter the number of hours');
const secondsOnHour = hours * 3600;
alert(`In ${hours} hours ${secondsOnHour} seconds!`)