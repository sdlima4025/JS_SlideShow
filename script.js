// VARIAVEIS GLOBAIS?
let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
document.querySelector('.slider--width').style.width = 
    'calc(100vw * ${totalSlides})';
document.querySelector('.slider--controls').style.height = 
     `${document.querySelector('.slider').clientHeight}px`;
// FUNÇÃO VERIFICADORA DE SLIDE 
function goPrev() {
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}
// FUNÇÃO PARA OS BOTÕES ADIANTAR UM SLIDE E VOLTAR UM SLIDE
function updateMargin(){
    let NewMargin = (currentSlide * document.body.clientWidth);
    document.querySelector(`.slider--width`).style.marginLeft = `-${NewMargin}px`;
}
setInterval(goNext, 2000);