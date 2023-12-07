// hamburger
const menu = document.getElementsByClassName('menu')
const nav = dcoument = document.getElementsByTagName('nav')

let count = 0;
let clicked = true;

menu[0].addEventListener('click', function(){
    count ++;
    if(clicked == true){
        nav[0].style.display = 'block';
        nav[0].style.transition = 'width 2s linear 1s;';
    }else{
        
        nav[0].style.display = 'none';
    };
    if(count == 1){
        clicked = !clicked;
        count = 0 
    };
});

// photo

const photo = document.getElementById('avatar');
const btn = document.getElementById('fix');

let photoWidth = photo.width;
let topHeight = 37 - ( ( 530 - photoWidth ) / 16 );

btn.onload = btn.style.top = `${topHeight}rem`

console.log(document)