const btn = document.getElementById('btn');
const form = document.querySelector('.form');


btn.addEventListener('click', () => {
   form.classList.remove('display_none');
})

// Список міст

let cities = [
    "Київ",
    "Суми",
    "Черкаси",
    "Вінниця",
    "Чернігів",
    "Миколаїв",
    "Тернопіль",
    "АР Крим",
    "Херсон",
    "Львів",
    "Івано-Франківськ",
    "Дніпро",
    "Харків",
    "Одеса",
    "Запоріжжя",
    "Хмельницький",
    "Рівне",
    "Луцьк",
    "Житомир",
    "Полтава",
    "Чернівці",
    "Кропивницький",
    "Ужгород",
    "Донецьк",
    "Луганськ",
];

let selectCity = document.querySelector('#selectCity');

let optionCity = cities.map(city =>{
    return `<option value="${city}">${city}</option>`
}).join('');

selectCity.innerHTML = optionCity;


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = Object.fromEntries( new FormData(e.target).entries()); 
    const formReq = document.querySelectorAll('._req');
    let error = 0;
    const container = document.getElementById('goods');


    const dataKeysArr = Object.keys(data);
    const dataValuesArr = Object.values(data);
    const column1 = document.querySelector('.table__column_left');
    const column2 = document.querySelector('.table__column_right');

    for(let i = 0; i < formReq.length; i++){
        const input = formReq[i];
        formAddError(input);
        if(input.value == ''){
            formAddError(input);
            error++;            
        }
    }
    if(error >= 1){
        alert(`Заповніть обов'язкові поля`);
    } else if(error == 0){
        container.classList.add('display_none')
        let columnKey = dataKeysArr.map(key =>{
            return `<div>${key}</div>`
        }).join('');
    
        column1.innerHTML = columnKey;
    
        let columnValue = dataValuesArr.map(value =>{
            return `<div>${value}</div>`
        }).join('');
    
        column2.innerHTML = columnValue;
    }
});
function formAddError(input) {
    input.classList.add('_error');
}