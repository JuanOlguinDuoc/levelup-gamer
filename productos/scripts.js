// Paso 1: Definir la estructura de datos para los productos
const productos = [
  {
    id: 1,
    imagenUrl: '../images/fondo.png',
    titulo: 'Resident Evil 4 Remake',
    atributos: 'Survival Horror',
    precio: '60000',
  },
  {
    id: 2,
    imagenUrl: '../images/fondo2.png',
    titulo: 'Dark Souls III',
    atributos: 'Action RPG, Souls-like, Adventure',
    precio: '40000',
  },
  {
    id: 3,
    imagenUrl: '../images/fondo3.png',
    titulo: 'Devil May Cry 5',
    atributos: 'Action, Hack and Slash, Action-Adventure',
    precio: '30000',
  },
  {
    id: 4,
    imagenUrl: '../images/fondo4.png',
    titulo: 'Dead Cells',
    atributos: 'Roguelike, Metroidvania, Action, Indie',
    precio: '20000',
  },
  {
    id: 5,
    imagenUrl: '../images/fondo5.jpg',
    titulo: 'Hollow Knight: Silksong',
    atributos: 'Action, Adventure, Indie, Metroidvania',
    precio: '10300',
  },
  {
    id: 6,
    imagenUrl: '../images/fondo6.png',
    titulo: 'Elden Ring Nightreing',
    atributos: 'Action RPG, Open World',
    precio: '70000',
  },
  {
    id: 7,
    imagenUrl: '../images/fondo7.png',
    titulo: 'Doom',
    atributos: 'First-Person Shooter, Action',
    precio: '35000',
  },
  {
    id: 8,
    imagenUrl: '../images/fondo8.png',
    titulo: 'The Last Faith',
    atributos: 'Action, Adventure, Indie, Metroidvania, Souls-like',
    precio: '25000',
  },
  {
    id: 9,
    imagenUrl: '../images/fondo9.png',
    titulo: 'Moonscars',
    atributos: 'Action, Platformer, Souls-like, 2D',
    precio: '45000',
  },
  {
    id: 10,
    imagenUrl: '../images/fondo10.png',
    titulo: 'Death\'s Gambit',
    atributos: 'Action, RPG, Platformer, Souls-like, 2D',
    precio: '55000',
  },
  {
    id: 11,
    imagenUrl: '../images/fondo11.png',
    titulo: 'Nioh',
    atributos: 'Action RPG, Souls-like, Dark Fantasy',
    precio: '38000',
  }
];


localStorage.clear(); // Limpiar el LocalStorage para pruebas (opcional)

// Paso 2: Guardar los datos en LocalStorage si no existen
if (!localStorage.getItem('catalogo')) {
    localStorage.setItem('catalogo', JSON.stringify(productos));
}

// Paso 3: Recuperar los datos del LocalStorage y mostrarlos en la página
const productosRecuperados = JSON.parse(localStorage.getItem('catalogo'));
const galeria = document.querySelector('.galeria');

if (productosRecuperados && galeria) {
    productosRecuperados.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card');

        card.innerHTML = `
            <div class="imagen-container">
                <img src="${producto.imagenUrl}" alt="${producto.titulo}">
            </div>
            <div class="info-container">
                <p class="product-title">${producto.titulo}</p>
                <p class="attributes">${producto.atributos}</p>
                <p class="price">$${producto.precio}</p>
                <div class="botones-producto">
                    <button class="btn-detalle" onclick="verDetalle(${producto.id})">Ver detalle</button>
                    <button class="btn-carrito" onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
                </div>
            </div>
        `;
        galeria.appendChild(card);
    })
} else {
    console.log('No se encontraron datos en localStorage o el contenedor .galeria no existe.');
}

// Función para ver detalle (redirige a la página de detalle)
function verDetalle(id) {
    const producto = productosRecuperados.find(p => p.id === id);
    const nombre = encodeURIComponent(producto.titulo);
    window.location.href = `../detalle_producto/detalle.html?id=${id}&nombre=${nombre}`;
}

// Función para añadir al carrito (ejemplo simple)
function agregarAlCarrito(id) {
    alert('Producto ' + id + ' añadido al carrito');
}