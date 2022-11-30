<<<<<<< HEAD
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
console.log('Task6.1');

let str = '';
for (let i = 20; i <= 30; i = i + 0.5) {
    str = str + ' ' + i
}
console.log(str);
console.log(' ');
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
console.log('Task6.2');

let usdInUah = 0;

for( let i = 10; i <= 100; i = i += 10){
   usdInUah = i * 27;
   console.log(i + ' USD is: ' + usdInUah + ' UAH');
}
console.log(' ');
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
console.log('Task6.3');

let square = prompt('Enter number of the square. Task6.3');

let number = 0;
if(!isNaN(square)){
    for(let i = 1; i <= 100; i++) {
        if(Math.pow(i, 2) <= square){
            console.log(`the square of ${i} does not exceed he number ${square}`);
        }
    }
} else {
    square = prompt('Enter number');
}
console.log(' ');
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
console.log('Task6.4');


for (let i = 1; i < 10; i++) {
    let numberI = i / 2;
    if (Number.isInteger(numberI)) {
        console.log(i + ' is compound')
    }
     else {
        console.log(i + ' is prime number')
    }
}
console.log(' ');
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
console.log('Task6.5');



const numbers = prompt('Enter Number. Task6.5'); 

let i = 0;
while ((Math.pow(3,i)) < numbers) {
  i++;
}
if (Math.pow(3,i)==numbers){
  console.log('The ' + numbers + ' number is a power of 3 ');
}
else {
  console.log('The number is not a power of 3');
}


=======
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
console.log('Task6.1');

let str = '';
for (let i = 20; i <= 30; i = i + 0.5) {
    str = str + ' ' + i
}
console.log(str);
console.log(' ');
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
console.log('Task6.2');

let usdInUah = 0;

for( let i = 10; i <= 100; i = i += 10){
   usdInUah = i * 27;
   console.log(i + ' USD is: ' + usdInUah + ' UAH');
}
console.log(' ');
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
console.log('Task6.3');

let square = prompt('Enter number of the square. Task6.3');

let number = 0;
if(!isNaN(square)){
    for(let i = 1; i <= 100; i++) {
        if(Math.pow(i, 2) <= square){
            console.log(`the square of ${i} does not exceed he number ${square}`);
        }
    }
} else {
    square = prompt('Enter number');
}
console.log(' ');
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
console.log('Task6.4');


for (let i = 1; i < 10; i++) {
    let numberI = i / 2;
    if (Number.isInteger(numberI)) {
        console.log(i + ' is compound')
    }
     else {
        console.log(i + ' is prime number')
    }
}
console.log(' ');
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
console.log('Task6.5');



const numbers = prompt('Enter Number. Task6.5'); 

let i = 0;
while ((Math.pow(3,i)) < numbers) {
  i++;
}
if (Math.pow(3,i)==numbers){
  console.log('The ' + numbers + ' number is a power of 3 ');
}
else {
  console.log('The number is not a power of 3');
}


>>>>>>> 96386cd0ba65ac4ff0b8fc2585b1a96d4a67d236
