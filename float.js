const bouncingElement = document.getElementById('floatingElement');
const bounceSpeed = 5;
let directionX = 1;
let directionY = 1;

function updatePosition() {
  const rect = bouncingElement.getBoundingClientRect();
  if (rect.left <= 0 || rect.right >= window.innerWidth) {
    directionX *= -1;
  }

  if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
    directionY *= -1;
  }



  console.log(bounceSpeed)
  const newX = rect.left + bounceSpeed * directionX;
  const newY = rect.top + bounceSpeed * directionY;

  bouncingElement.style.left = newX + 'px';
  bouncingElement.style.top = newY + 'px';
}

function animate() {
  updatePosition();
  requestAnimationFrame(animate);
}

animate();
