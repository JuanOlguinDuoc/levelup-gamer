document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('.register-form');
    const notification = document.getElementById('notification');
    const notificationContent = document.getElementById('notification-content');
    const closeNotification = document.getElementById('close-notification');

    // Cerrar notificación al hacer click en la X
    if (closeNotification) {
        closeNotification.addEventListener('click', () => {
            notification.style.display = 'none';
        });
    }

    // Variables para cada input del registro
    const runInput = document.getElementById('run');
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const direccionInput = document.getElementById('direccion');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            let errors = [];

            if (runInput.value.trim() === '') {
                errors.push('El campo RUN es obligatorio.');
                isValid = false;
            } else if (!/^\d{7,8}-[0-9kK]$/.test(runInput.value.trim())) {
                errors.push('El formato del RUN no es válido. Debe ser 12345678-9 o 1234567-K.');
                isValid = false;
            }

            if (nombreInput.value.trim() === '') {
                errors.push('El campo Nombre es obligatorio.');
                isValid = false;
            } else if (!/^[a-zA-ZÀ-ÿ]+$/.test(nombreInput.value.trim())) {
                errors.push('El campo Nombre solo debe contener letras, sin caracteres especiales.');
                isValid = false;
            }

            if (apellidosInput.value.trim() === '') {
                errors.push('El campo Apellidos es obligatorio.');
                isValid = false;
            } else if (!/^[a-zA-ZÀ-ÿ]+ [a-zA-ZÀ-ÿ]+$/.test(apellidosInput.value.trim())) {
                errors.push('El campo Apellidos solo debe contener dos palabras separadas por un espacio, usando solo letras.');
                isValid = false;
            }

            if (direccionInput.value.trim() === '') {
                errors.push('El campo Dirección es obligatorio.');
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
            if (emailInput.value.trim() === '') {
                errors.push('El campo Email es obligatorio.');
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                errors.push('El formato del Email no es válido. Debe ser un correo de duoc.cl, profesor.duoc.cl o gmail.com.');
                isValid = false;
            }

            if (passwordInput.value.trim() === '') {
                errors.push('El campo Contraseña es obligatorio.');
                isValid = false;
            } else if (passwordInput.value.trim().length < 4 || passwordInput.value.trim().length > 10) {
                errors.push('La contraseña debe tener entre 4 y 10 caracteres.');
                isValid = false;
            }

            if (confirmPasswordInput.value.trim() === '') {
                errors.push('El campo Confirmar Contraseña es obligatorio.');
                isValid = false;
            } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
                errors.push('Las contraseñas no coinciden.');
                isValid = false;
            }

            if (!isValid) {
                notificationContent.innerHTML = errors.map(e => `<div>${e}</div>`).join('');
                notification.style.display = 'block';
            } else {
                notification.style.display = 'none';
                alert('¡Registro validado correctamente!');
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = '../home/index.html';
                // Aquí puedes continuar con el registro real
            }
        });
    }
});