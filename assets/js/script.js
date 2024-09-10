document.querySelector('.menu-opener').addEventListener('click', ()=>{
    let nav = document.querySelector('header nav');
    nav.classList.toggle('opened');
});
//cria a funcao que verifica e alterna os slides
const toggleSlider = () =>{
    //captura o slides existentes
    const slides=document.querySelectorAll('input[name=slider]');
    //caso slides seja 0, sai da função
    if(slides.length === 0) return;
    //caso slides não seja 0, faz o codigo abaixo
    //verifica se tem slide marcado, caso não, marca o primeiro
    let current = document.querySelector('input[name=slider]:checked');
    //se não tem nenhum checado, checa o slider
    if(!current){
        current = document.querySelector('input[name=slider]');
        current.setAttribute('checked', true)
    }
    //captura o slider pelo id
    let id=parseInt(current.getAttribute('id'). split('-')[1]);
    //verifica se chegou no final dos elementos
    //caso sim, volta pra 1
    //caso não, adiciona 1 no numero do id
    if(id+1 <= slides.length){
        id++;
    }else{
        id=1;
    }
    //estrutura for(para) para retirar o checked dos slides
    for(let slider of slides) slider.removeAttribute('checked');
    document.querySelector(`#slider-${id}`).setAttribute('checked', true);

}
//escolhe o tempo para executar a função 1000ms=1s
setInterval(toggleSlider, 5000);