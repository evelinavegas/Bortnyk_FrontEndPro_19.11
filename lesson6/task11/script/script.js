let photos = [
    './img/img1.jpg',
    './img/img2.jpeg',
    './img/img3.jpg',
    './img/img4.jpg',
    './img/img5.jpg',
    './img/img6.png',
    './img/img7.jpg',
    './img/img8.jpg',
    './img/img9.jpg',
];

let popPhotos = document.querySelector('#gallery');

let random = Math.floor(Math.random() * photos.length);
let randomPhoto = photos[random];


let img = document.createElement('img');

img.src = randomPhoto;

popPhotos.prepend(img);