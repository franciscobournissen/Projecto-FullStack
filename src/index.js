document.addEventListener("DOMContentLoaded", function () {
    // Verificar si el usuario tiene un token almacenado
    var token = localStorage.getItem("token");

    if (!token) {
        // Si no hay un token, redirigir al usuario a la página de inicio de sesión
        window.location.href = "/pages/login.html";
    }
});
