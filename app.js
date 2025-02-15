// app.js
document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de efectos
  initTypingEffect();
  createHearts(50); // Cambiado a 50 corazones
  initScrollReveal();
  initNovaCard();
});

function initTypingEffect() {
    const titleElement = document.getElementById('mainTitle');
    const text = "¡Nuestro San Valentín Terranova!";
    let index = 0;

    function type() {
        if (index < text.length) {
            titleElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            titleElement.style.borderRight = 'none';
        }
    }
    type();
}

// JavaScript actualizado - Reemplaza tu función createHearts
// ACTUALIZAR LA FUNCIÓN createHearts EN TU JS
function createHearts(quantity) {
  const container = document.getElementById('heartsContainer');
  container.innerHTML = '';
  
  for(let i = 0; i < quantity; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      
      // Posición horizontal aleatoria
      heart.style.left = `${Math.random() * 100}%`;
      
      // Retraso de animación escalonado
      heart.style.animationDelay = `${Math.random() * 5}s`;
      
      // Tamaño aleatorio
      const size = 15 + Math.random() * 15;
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      
      // Velocidad de animación variable
      heart.style.animationDuration = `${6 + Math.random() * 4}s`;
      
      container.appendChild(heart);
  }
}

// Inicializar con 30 corazones
createHearts(30);

function initScrollReveal() {
    ScrollReveal().reveal('.timeline-item, .trait-card', {
        delay: 300,
        distance: '50px',
        origin: 'bottom',
        interval: 200,
        reset: true
    });
}

function flipCard() {
    const card = document.querySelector('.luxury-card');
    card.classList.toggle('flipped');
    
    // Forzar repintado del navegador
    void card.offsetWidth;
    
    // Añadir temporizador para confeti
    if (card.classList.contains('flipped')) {
      setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 }
        });
      }, 300);
    }
  }

function showSurprise() {
    // Animación de confeti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#8b0000', '#ffffff']
    });
  
    // Efecto de corazones flotantes
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(heart);
    }
    
    setTimeout(() => {
      container.innerHTML = '';
    }, 3000);
  }

  function confirmAssistance() {
    // Animación mejorada
    const btn = document.querySelector('.confirm-btn');
    btn.classList.add('confirmed');
    
    // Confeti especial
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#FFFFFF', '#8B0000'],
      shapes: ['circle', 'heart']
    });
    
    // Efecto de check
    btn.innerHTML = '¡Confirmado! 💖';
    setTimeout(() => {
      btn.innerHTML = `<span class="btn-text">Confirmo con Alegría</span>
                       <span class="btn-icon">🎀</span>`;
      btn.classList.remove('confirmed');
    }, 2000);
  }