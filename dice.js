let randomNumber1 = Math.floor((Math.random()*6)+1);
let getRandomImage = 'dice'+randomNumber1+'.png';
let getImageSource = 'images/'+getRandomImage;
var selectImageTag = document.querySelectorAll('img')[0];
selectImageTag.setAttribute('src', getImageSource);

let randomNumber2 = Math.floor((Math.random()*6)+1);
let getRandomImage2 = 'dice'+randomNumber2+'.png';
let getImageSource2 = 'images/'+getRandomImage2;
var selectImageTag2 = document.querySelectorAll('img')[1];
selectImageTag2.setAttribute('src', getImageSource2);

if(randomNumber1<randomNumber2){
    document.querySelector('h1').textContent='Player 2 Wins';
}else if(randomNumber1===randomNumber2){
    document.querySelector('h1').textContent='Match Draw';
}else{
    document.querySelector('h1').textContent='Player 1 Wins';
}