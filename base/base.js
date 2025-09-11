function loadNavbar() {
  fetch('../base/base.html')
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

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const raindrops = [];

function createRaindrop() {
    const x = Math.random() * canvas.width;
    const y = -5;
    const speed = Math.random() * 30 + 1;
    const length = Math.random() * 10 + 10;
    raindrops.push({ x, y, speed, length });
}

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

function animate() {
    createRaindrop();
    updateRaindrops();
    drawRaindrops();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener('DOMContentLoaded', function() {
    const gifList = [
        '../gif/fatalis.gif',
        '../gif/maxwell.gif',
        '../gif/metaton.gif',
        '../gif/oia-uia.gif'
    ];

    const audioList = [
        '../audio/Maxwell Cat.mp3',
        '../audio/Death By Glamour.mp3',
        '../audio/Memory.mp3',
        '../audio/audio.mp3'
    ];

    function setGifAndAudioListener() {
        const gifImg = document.querySelector('img.gif');
        const audioTag = document.querySelector('nav audio');
        if (gifImg && audioTag) {
            gifImg.addEventListener('click', function() {
                // Cambiar GIF
                const actuales = gifList.filter(src => !gifImg.src.endsWith(src.replace('../', '')));
                const disponibles = actuales.length > 0 ? actuales : gifList;
                const nuevoGif = disponibles[Math.floor(Math.random() * disponibles.length)];
                gifImg.src = nuevoGif;

                // Cambiar audio
                const actualesAudios = audioList.filter(src => !audioTag.src.endsWith(src.replace('../', '')));
                const disponiblesAudios = actualesAudios.length > 0 ? actualesAudios : audioList;
                const nuevoAudio = disponiblesAudios[Math.floor(Math.random() * disponiblesAudios.length)];
                audioTag.src = nuevoAudio;
                audioTag.play();
            });
        }
    }

    if (document.getElementById('base')) {
        const observer = new MutationObserver(() => {
            setGifAndAudioListener();
        });
        observer.observe(document.getElementById('base'), { childList: true, subtree: true });
        setGifAndAudioListener();
    } else {
        setGifAndAudioListener();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        const botones = document.getElementById('auth-buttons');
        botones.style.display = 'none';
    }
});

function hideRegisterIfLoggedIn() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        const botones = document.getElementById('session');
        const btnCerrar = document.getElementById('cerrarSession');
        if (botones) {
            botones.style.display = 'none';
            btnCerrar.style.display = 'block';
        }
    }
}

function deleteSession() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '../home/index.html';
}

// Si el navbar se carga dinámicamente, observa el DOM y ejecuta la función cuando esté listo
document.addEventListener('DOMContentLoaded', function() {
    const baseDiv = document.getElementById('base');
    if (baseDiv) {
        const observer = new MutationObserver(() => {
            hideRegisterIfLoggedIn();
        });
        observer.observe(baseDiv, { childList: true, subtree: true });
        // También intenta una vez por si ya está cargado
        hideRegisterIfLoggedIn();
    } else {
        hideRegisterIfLoggedIn();
    }
});