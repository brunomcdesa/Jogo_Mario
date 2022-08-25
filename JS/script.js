const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const pontuacao = document.querySelector('.pontuacao')
var maiorPontuacao = document.querySelector('.pontuacaomaior'); 
var pontuacaomaxima = 0;


const pulo = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
   

   //if para encerramento
    if(pipePosition <= 145 && pipePosition > 0 && marioPosition < 89){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './IMAGENS/game-over.png';
        mario.style.width = '90px';
        mario.style.marginLeft = '50px';

        clouds.style.animation ='none';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop);
    }
    else{
        let ultimaPontuacao = 0
        pontuacaomaxima = pontuacaomaxima + 1;
        pontuacao.innerHTML = "Pontução: " + pontuacaomaxima;
        console.log(pontuacaomaxima);
     //   if(ultimaPontuacao < pontuacaomaxima){
            
     //       ultimaPontuacao = pontuacaomaxima;
     //       maiorPontuacao.innerHTML = "Mair Pontuação: " + ultimaPontuacao;
     //   }
    }
}, 10);



document.addEventListener('keypress', pulo);