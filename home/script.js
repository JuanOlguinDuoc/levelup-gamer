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
    atributos: 'RPG de acción',
    precio: '40000',
  },
  {
    id: 3,
    imagenUrl: '../images/fondo3.png',
    titulo: 'Devil May Cry 5',
    atributos: 'Hack and slash',
    precio: '30000',
  },
  {
    id: 4,
    imagenUrl: '../images/fondo4.png',
    titulo: 'Dead Cells',
    atributos: 'Roguelike',
    precio: '20000',
  },
  {
    id: 5,
    imagenUrl: '../images/fondo5.jpg',
    titulo: 'Hollow Knight: Silksong',
    atributos: 'Metroidvania',
    precio: '10300',
  }
];

localStorage.removeItem('catalogo'); // Limpia el LocalStorage para pruebas
// Paso 2: Guardar los datos en LocalStorage
// Esta acción solo es necesaria si los datos no existen aún.
// Se usa un "if" para no sobrescribir los datos en cada recarga de la página.
if (!localStorage.getItem('catalogo')) {
    localStorage.setItem('catalogo', JSON.stringify(productos));
}

// Paso 3: Recuperar los datos del LocalStorage y mostrarlos en la página
const productosRecuperados = JSON.parse(localStorage.getItem('catalogo'));
const galeria = document.querySelector('.galeria');

// Verificar si se recuperaron datos y si el contenedor existe
if (productosRecuperados && galeria) {
    productosRecuperados.forEach(producto => {
        // Crear el elemento de la tarjeta (card) para cada producto
        const card = document.createElement('div');
        card.classList.add('producto-card'); // Usa una clase para aplicar estilos CSS

        // Construir la estructura HTML interna de la tarjeta usando los datos del producto
        card.innerHTML = `
            <div class="imagen-container">
                <img src="${producto.imagenUrl}" alt="${producto.titulo}">
            </div>
            <div class="info-container">
                <p class="product-title">${producto.titulo}</p>
                <p class="attributes">${producto.atributos}</p>
                <p class="price">$${producto.precio}</p>
            </div>
        `;
        
        // Agregar la tarjeta completa al contenedor principal de la galería
        galeria.appendChild(card);
    });
} else {
    console.log('No se encontraron datos en localStorage o el contenedor .galeria no existe.');
}