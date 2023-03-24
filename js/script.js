//immagini
const images = [
  'img/foto1.jpg',
  'img/foto2.jpg',
  'img/foto3.jpg',
  'img/foto4.jpg',
  'img/foto5.jpg',
] 

let counterImage = 0
const sectionsWrapper = document.querySelector('.sections-wrapper');

const btnDown = document.querySelector('.btn-up')
const btnUp = document.querySelector('.btn-down');



for(let i = 0; i < images.length; i++){
  const image = images[1];

  sectionsWrapper.innerHTML += `
  <img class="section hide" src="${image}">
  `
}

const sectionsGroup = document.getElementsByClassName('section');
sectionsGroup[counterImage].classList.remove('hide');

btnUp.addEventListener('click' , function(){

  sectionsGroup[counterImage].classList.add('hide');

  counterImage++;
  sectionsGroup[counterImage].classList.remove('hide');

  if(counterImage === images.length -1){
  btnUp.classList.add('hide');
}
})

btnDown.addEventListener('click' , function(){
  sectionsGroup[counterImage].classList.add('hide');
  
  counterImage--;
  sectionsGroup[counterImage].classList.remove('hide');
})




