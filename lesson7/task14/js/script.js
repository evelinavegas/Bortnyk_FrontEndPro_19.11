"use strict"

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

const formWrap = document.querySelector('.form');
const form = document.querySelector('#form');


const column1 = document.querySelector('.table__column_left');
const column2 = document.querySelector('.table__column_right');


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    formWrap.classList.add('displayNone');
    const data = Object.fromEntries( new FormData(e.target).entries()); 

    const dataKeysArr = Object.keys(data);
    const dataValuesArr = Object.values(data);
    // console.log(dataKeysArr);
    // console.log(dataValueArr);
    
    let columnKey = dataKeysArr.map(key =>{
        return `<div>${key}</div>`
        // console.log(i)
    }).join('');

    column1.innerHTML = columnKey;

    let columnValue = dataValuesArr.map(value =>{
        return `<div>${value}</div>`
        // console.log(i)
    }).join('');

    column2.innerHTML = columnValue;
});



