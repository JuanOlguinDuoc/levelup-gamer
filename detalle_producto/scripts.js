document.addEventListener('DOMContentLoaded', function() {
    // Obtener el id de la URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const nombre = params.get('nombre'); // Si lo necesitas

    // Obtener productos del localStorage
    const productos = JSON.parse(localStorage.getItem('catalogo')) || [];

    // Buscar el producto por id
    const producto = productos.find(p => p.id === id);

    if (producto) {
        document.getElementById('detalle-imagen').src = producto.imagenUrl;
        document.getElementById('detalle-imagen').alt = producto.titulo;
        document.getElementById('detalle-titulo').textContent = producto.titulo;
        document.getElementById('detalle-atributos').textContent = producto.atributos;
        document.getElementById('detalle-precio').textContent = '$' + producto.precio;
        document.getElementById('btn-carrito').onclick = function() {
            alert('Producto ' + producto.titulo + ' añadido al carrito');
            // Aquí puedes agregar la lógica real de carrito si la tienes
        };
    } else {
        document.getElementById('detalle-juego').innerHTML = '<p>Producto no encontrado.</p>';
    }
});