document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("registro");

    formulario.addEventListener("submit", (e) => {
        // Elementos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const tel = document.getElementById("tel").value.trim();
        const email = document.getElementById("email").value.trim();
        const selectNumero = document.getElementById("numero").value;

        // Checkboxes
        const perro = document.getElementById("perro").checked;
        const gato = document.getElementById("gato").checked;
        const otro = document.getElementById("otro").checked;

        // 1. Validar nombre
        if (nombre === "") {
            e.preventDefault();
            alert("Error: Por favor ingresa tu nombre.");
            return;
        }

        // 2. Validar apellido
        if (apellido === "") {
            e.preventDefault();
            alert("Error: Por favor ingresa tu apellido.");
            return;
        }

        // 3. Validar teléfono (10 dígitos numéricos)
        const regexTel = /^[0-9]{10}$/;
        if (!regexTel.test(tel)) {
            e.preventDefault();
            alert("Error: El número de teléfono debe tener exactamente 10 dígitos numéricos.");
            return;
        }

        // 4. Validar correo electrónico
        if (email === "" || !email.includes("@") || !email.includes(".")) {
            e.preventDefault();
            alert("Error: Ingresa un correo electrónico válido (ejemplo@correo.com).");
            return;
        }

        // 5. Validar que seleccione al menos una mascota
        if (!perro && !gato && !otro) {
            e.preventDefault();
            alert("Error: Debes seleccionar al menos una opción de mascota.");
            return;
        }

        // 6. Validar que seleccione la cantidad de animales
        if (selectNumero === "") {
            e.preventDefault();
            alert("Error: Por favor selecciona cuántos animales tienes.");
            return;
        }

        // Si pasa todas las validaciones
        alert("¡Registro enviado exitosamente!");
    });
});