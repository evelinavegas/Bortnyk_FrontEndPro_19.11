let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');

let link1 = 'https://github.com/evelinavegas';
let link2 = 'www.youtube.com';

if(link1.includes('https') || link1.includes('http')){
    button1.href = link1;
} else {
    link1 = "https://" + link1;
    button1.href = link1;
}

if(link2.includes('https') || link2.includes('http')){
    button2.href = link2;
} else {
    link2 = "https://" + link2;
    button2.href = link2;
}
