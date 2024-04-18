function createFallingCheckmark() {
  const checkmarkElement = document.createElement('div');
  checkmarkElement.classList.add('checkmark');
  checkmarkElement.textContent = '✔'; // Используем галочку в качестве символа

  document.getElementById('falling-checkmarks-container').appendChild(checkmarkElement);

  const initialX = Math.random() * window.innerWidth;
  checkmarkElement.style.left = `${initialX}px`;

  const animation = checkmarkElement.animate([    { transform: `translateY(-100vh)` },    { transform: `translateY(${window.innerHeight}px)` }  ], {
    duration: Math.random() * 3000 + 2000,
    easing: 'linear',
    fill: 'forwards'
  });

  animation.onfinish = () => {
    checkmarkElement.remove();
  };
}

setInterval(createFallingCheckmark, 200);