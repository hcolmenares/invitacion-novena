// archivo JavaScript
const CIELO = document.querySelector('.box');

// función para crear un nuevo copo de nieve y añadirlo al cielo
function crearCopoNieve() {
    const COPO_NIEVE = document.createElement('div');
    COPO_NIEVE.classList.add('copo-nieve');
    CIELO.appendChild(COPO_NIEVE);
  
    // generar un tamaño aleatorio para el copo de nieve
    const ANCHO = Math.floor(Math.random() * (15 - 5 + 1) + 5);
    const ALTO = ANCHO;
    COPO_NIEVE.style.width = ANCHO + 'px';
    COPO_NIEVE.style.height = ALTO + 'px';
  
    // animar el copo de nieve
    animarCopoNieve(COPO_NIEVE);
  
    // eliminar el copo de nieve del DOM al final de la animación
    COPO_NIEVE.addEventListener('animationend', function() {
      CIELO.removeChild(COPO_NIEVE);
    });
}

// función para animar el copo de nieve hacia abajo en la pantalla
function animarCopoNieve(copoNieve) {
  const VELOCIDAD = Math.random() * 10; // velocidad aleatoria entre 0 y 10
  const TIEMPO_ANIMACION = VELOCIDAD * 1000; // tiempo en milisegundos

  copoNieve.style.animationDuration = TIEMPO_ANIMACION + 'ms';
  copoNieve.style.left = Math.random() * 100 + '%'; // posición aleatoria en el ancho de la pantalla
}

// crear un nuevo copo de nieve cada 500 milisegundos
setInterval(crearCopoNieve, 500);