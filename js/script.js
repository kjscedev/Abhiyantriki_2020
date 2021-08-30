const scrollBack = document.querySelector('.scroll-top');
const playGame = document.querySelector('.play-game');



scrollBack.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

playGame.addEventListener('click', () => {
    window.scrollTo(0, 1000);
})

