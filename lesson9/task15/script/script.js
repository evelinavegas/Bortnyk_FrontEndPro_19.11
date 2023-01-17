const btnSend = document.getElementById('send');
const inputNumber = document.getElementById('input_number');
const post = document.getElementById('post');
const comentBtn = document.getElementById('comentBtn');
const coments = document.querySelector('.__coments');

const error = 'Помилка. Введіть число від 1 до 100';


btnSend.addEventListener('click', sendPost);
comentBtn.addEventListener('click', sendComents);


function sendPost(e){
    e.preventDefault();
    if(inputNumber.value > 0 && inputNumber.value <= 100){
        fetch('https://jsonplaceholder.typicode.com/posts/'+inputNumber.value)
        .then(data => data.json())
        .then(json => {
            comentBtn.classList.remove('display_none');
            comentBtn.classList.add('comentBtn');

            post.innerHTML = `<h1> ${json.title} </h1> <p> ${json.body} </p>`
        })
    } else {
        post.innerHTML = `<p> ${error} </p>`;
    }
}

function sendComents(e){
    e.preventDefault();
    if(inputNumber.value > 0 && inputNumber.value <= 100){
        fetch('https://jsonplaceholder.typicode.com/comments/'+inputNumber.value)
        .then(data => data.json())
        .then(json => {
            coments.innerHTML = `<p>Email: ${json.email} </p> <p>Name: ${json.name} </p> <p>Coments: ${json.body} </p>`
        })
    } else {
        coments.innerHTML = `<p> ${error} </p>`;
    }
}