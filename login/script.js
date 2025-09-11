document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const email = document.getElementById("email").value.trim();
            const emailRegex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
            if (!emailRegex.test(email)) {
                showError('email-error', 'Correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com');
                isValid = false;
            } else {
                clearError('email-error');
            }
            const password = document.getElementById("password").value;
            // Expresión regular para la complejidad de la contraseña
            if (password.length < 4 || password.length > 10) {
                showError('password-error', 'La contraseña debe tener entre 4 y 10 caracteres.');
                isValid = false;
            } else {
                clearError('password-error');
            }

            if (isValid == true) {
                alert('¡Inicio de sesión validado correctamente!');

                // Aquí iría la lógica para verificar las credenciales del usuario
                // Por ahora, simulamos un inicio de sesión exitoso
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = '../home/index.html'; // o la página que corresponda
            }
        })
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red'; // Estilo para resaltar el error
}

// Función para limpiar los mensajes de error
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
}
