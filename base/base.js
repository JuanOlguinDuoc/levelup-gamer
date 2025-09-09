function loadNavbar() {
  fetch('../base/base.html')  // asegúrate de la ruta correcta
    .then(response => response.text())
    .then(data => {
      document.getElementById('base').innerHTML = data;
    })
    .catch(error => console.error('Error cargando navbar:', error));
}

document.addEventListener('DOMContentLoaded', loadNavbar);


$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

const canvas = document.getElementById('rainfall');
const ctx = canvas.getContext('2d');

// Set canvas size to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store the raindrops
const raindrops = [];

// Function to create a new raindrop
function createRaindrop() {
    const x = Math.random() * canvas.width;
    const y = -5;
    const speed = Math.random() * 30 + 1;
    const length = Math.random() * 10 + 10;

    raindrops.push({ x, y, speed, length });
}

// Function to update the raindrops' positions
function updateRaindrops() {
    for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];

        raindrop.y += raindrop.speed;

        if (raindrop.y > canvas.height) {
            raindrops.splice(i, 1);
            i--;
        }
    }
}

// Function to draw the raindrops
function drawRaindrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgb(155, 250, 176)';
    ctx.lineWidth = 2;

    for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];

        ctx.beginPath();
        ctx.moveTo(raindrop.x, raindrop.y);
        ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
        ctx.stroke();
    }
}

// Function to animate the raindrops
function animate() {
    createRaindrop();
    updateRaindrops();
    drawRaindrops();

    requestAnimationFrame(animate);
}

// Start the animation
animate();