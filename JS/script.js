const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

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
}, 10);

document.addEventListener('keydown', pulo);