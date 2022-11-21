// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

const action = prompt('choose an action: add, sub, mult, div');
const firstNumber = parseInt(prompt('Enter first number'));
const secondNumber = parseInt(prompt('Enter second number', 0));



switch(action) {
    case "add": 
        const add = firstNumber + secondNumber;
        alert(`${firstNumber} + ${secondNumber} = ${add}`)
    break;
    case "sub": 
        const sub = Math.abs(firstNumber - secondNumber);
        alert(`${firstNumber} - ${secondNumber} = ${sub}`)
    break;
    case "mult": 
        const mult = firstNumber * secondNumber;
        alert(`${firstNumber} * ${secondNumber} = ${mult}`)
    break;
    case "div": 
        const div = firstNumber / secondNumber;
        alert(`${firstNumber} / ${secondNumber} = ${div}`)
    break;
    default:
        alert('ERROR!')
}