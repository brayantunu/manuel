const form = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validar las credenciales
  if (email === 'manuel@gmail.com' && password === 'soymuybueno') {
    // Las credenciales son válidas, redirigir al usuario a la página de inicio
    window.location.href = 'index.html';
  } else {
    // Las credenciales son incorrectas, mostrar mensaje de error
    errorMessage.style.display = 'block';
  }
});
