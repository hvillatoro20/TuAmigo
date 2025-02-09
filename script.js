function evaluarDepresion() {
    let total = 0;
    for (let i = 1; i <= 20; i++) {
        const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
        if (respuesta) {
            total += parseInt(respuesta.value);
        }
    }

    let resultado = "";
    let recomendacion = "";

    if (total <= 10) {
        resultado = "Tu nivel de depresión es bajo.";
        recomendacion = "Aunque no parece que estés experimentando una depresión severa, es importante cuidar tu salud mental. Si tienes dudas, no dudes en contactarnos.";
    } else if (total <= 20) {
        resultado = "Tu nivel de depresión es moderado.";
        recomendacion = "Parece que estás pasando por un momento difícil. Te recomendamos buscar ayuda profesional para manejar tus emociones.";
    } else if (total <= 30) {
        resultado = "Tu nivel de depresión es alto.";
        recomendacion = "Es importante que busques ayuda profesional lo antes posible. No estás solo, y estamos aquí para apoyarte.";
    } else {
        resultado = "Tu nivel de depresión es muy alto.";
        recomendacion = "Por favor, contacta a un profesional de inmediato. Tu bienestar es lo más importante.";
    }

    document.getElementById("texto-resultado").innerText = resultado;
    document.getElementById("recomendacion").innerText = recomendacion;
}

document.getElementById("form-contacto").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const celular = document.getElementById("celular").value;

    // Simulación de envío de correo
    const mensaje = `Nombre: ${nombre}\nCorreo: ${correo}\nCelular: ${celular}`;
    alert("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.\n\n" + mensaje);

    // Limpiar el formulario
    document.getElementById("form-contacto").reset();
});