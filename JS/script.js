const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const pontuacao = document.querySelector('.pontuacao')
var maiorPontuacao = document.querySelector('.pontuacaomaior'); 
var pontuacaomaxima = 0;

// Funcao para criar botao para recomeçar o jogo
function botao(){
    var btn = document.createElement("button");
    var lbl = document.createTextNode("Recomeçar");
    btn.appendChild(lbl);
    btn.classList.add('botao')
    btn.addEventListener("click", function(){
        location.reload();
   })
    document.body.appendChild(btn);
}

//Funcao para efetuar o pulo
const pulo = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}


//funcao principal do jogo
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
   

   //if para encerramento
    if(pipePosition <= 145 && pipePosition > 0 && marioPosition < 89){
       // encerrar animação do tubo
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        //encear anmação do mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './IMAGENS/game-over.png';
        mario.style.width = '90px';
        mario.style.marginLeft = '50px';

        //encerra animação da nuvem
        clouds.style.animation ='none';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop);
        botao.apply();

    }
    else{
        
        pontuacaomaxima = pontuacaomaxima + 1;
        pontuacao.innerHTML = "Pontução: " + pontuacaomaxima;
        console.log(pontuacaomaxima);

            // IF PARA DIMINUIR O TEMPO DA ANIMACAO DEPOS DE CERTA PONTUACAO
        if (pontuacaomaxima > 100){
            pipe.style.animation
            console.log(pipe.style.animation);
        }
     //   if(ultimaPontuacao < pontuacaomaxima){
            
     //       ultimaPontuacao = pontuacaomaxima;
     //       maiorPontuacao.innerHTML = "Mair Pontuação: " + ultimaPontuacao;
     //   }
    }
}, 10);



document.addEventListener('keypress', pulo);