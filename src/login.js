//prettier-ignore
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var floatingInput = document.getElementById("floatingInput");
    var floatingPassword = document.getElementById("floatingPassword");

    if (floatingInput.value.trim() === "" || floatingPassword.value.trim() === "") {
        alert("Por favor, ingresa tu correo y contraseña.");
        return;
    }

    var token = (Math.random().toString(36).substr(2));
    // Almacenar el token en localStorage
    localStorage.setItem("token", token);

    // Almacenar nombre de cuenta
    localStorage.setItem("account", floatingInput.value);
    
    // Redirigir al usuario a la página index.html
    window.location.href = "../index.html";
});
