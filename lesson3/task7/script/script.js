let array = [];
const lenghtArr = prompt('Іpecify the length of the array');

for(let index = 0; index < lenghtArr; index++) {
    array.push(prompt("Enter number"));
}
console.log(array);

array.sort(function(a,b) {
    return a - b
});
console.log(array);

array.splice(1,3);

console.log(array);
