document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    const notification = document.getElementById('notification');
    const notificationContent = document.getElementById('notification-content');
    const closeNotification = document.getElementById('close-notification');

    // Cerrar notificación al hacer click en la X
    if (closeNotification) {
        closeNotification.addEventListener('click', () => {
            notification.style.display = 'none';
        });
    }

    // Variables para cada input
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const comentarioInput = document.getElementById('comentario');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            let errors = [];

            if (nombreInput.value.trim() === '') {
                errors.push('El campo Nombre es obligatorio.');
                isValid = false;
            } else if (!/^[a-zA-ZÀ-ÿ]+( [a-zA-ZÀ-ÿ]+){0,3}$/.test(nombreInput.value.trim())) {
                errors.push('El campo Nombre solo debe contener letras y hasta 3 espacios (máximo 4 palabras).');
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

            if (comentarioInput.value.trim() === '') {
                errors.push('El campo Comentario es obligatorio.');
                isValid = false;
            } else if (comentarioInput.value.trim().length > 500) {
                errors.push('El comentario debe tener como máximo 500 caracteres.');
                isValid = false;
            }

            if (!isValid) {
                notificationContent.innerHTML = errors.map(e => `<div>${e}</div>`).join('');
                notification.style.display = 'block';
            } else {
                notification.style.display = 'none';
                alert('¡Mensaje enviado correctamente!');
            }
        });
    }
});