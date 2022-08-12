const mario = document.querySelector('.mario');

const pulo = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', pulo);