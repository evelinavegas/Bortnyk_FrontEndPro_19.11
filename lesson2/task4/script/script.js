// Створити скрипт яки повинен виконувати наступне:

// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.

const yearBirth = window.prompt('Enter your year of birth', 2000);

let hometown = prompt('Enter your hometown', 'Kyiv');

let sport = prompt('Enter your favourite kind of sport', 'Footbol');

// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." 
// і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.


let yearsOld;

if(yearBirth > 0){
    yearsOld = 2022 - yearBirth;
}
switch(hometown) {
    case "Kyiv":
    case "kyiv":
        hometown = 'You live in the capital of Ukraine'
        break;
    case "Washington":
    case "washington":
        hometown = 'You live in the capital of USA'
        break;
    case "London":
    case "london":
        hometown = 'You live in the capital of United Kingdom'
        break;
    case null:
    case "":
        hometown = "it's a pity that you didn't want to specify"
        break;
    default:
        hometown = `You live in ${hometown}`
}
//  бокс, вільна боротьба, шахи вільгельм

switch(sport) {
    case "boxing":
    case "Boxing":
        sport = 'Cool! Do you want to be like Mike Tyson?'
        break;
    case "freestyle wrestling":
    case "Freestyle wrestling":
        sport = 'Cool! Do you want to become like Muhammed Aliyev?'
        break;
    case "chess":
    case "Chess":
        sport = 'Cool! Do you want to become like William Steinitz'
        break;
    case null:
    case "":
        sport = "it's a pity that you didn't want to specify"
        break;
    default:
        sport = `Your favorite sport ${sport}`
}

alert(`
You are ${yearsOld} years old. 
${hometown}.
${sport}`);

