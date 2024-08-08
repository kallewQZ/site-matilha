const botoesMostrarplayers = document.querySelectorAll('.btn-mostrar-players');

botoesMostrarplayers.forEach(botaoMostrarplayers => {
  botaoMostrarplayers.addEventListener('click', () => {
    const containerplayers = botaoMostrarplayers.parentElement.querySelector('.container-players');
    const playersInativos = containerplayers.querySelectorAll('.player:not(.ativo)');


    mostrarMaisplayers(playersInativos);


    esconderBotao(botaoMostrarplayers);
    console.log(botaoMostrarplayers);
  });
});

function esconderBotao(botao) {
  if (botao) {
    botao.classList.add("remover");
  }
}

function mostrarMaisplayers(players) {
  players.forEach(player => {
    player.classList.add('ativo');
  });
}


const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

function goToSlide(index) {
  if (index < 0) {
    currentIndex = items.length - 1;
  } else if (index >= items.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const trackWidth = track.offsetWidth;
  track.style.transform = `translateX(-${currentIndex * trackWidth}px)`;
}

prevButton.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});
