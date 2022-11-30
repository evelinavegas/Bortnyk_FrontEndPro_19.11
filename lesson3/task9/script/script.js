// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const length = prompt('Enter lenght of key')

function generate() {
    let password = '';
    for(let i = 0; i < length; ++i){
       password += characters[
           Math.floor(
               Math.random() * characters.length
          )
      ];
    }
    console.log(password)
    return password;
 }
 generate()
