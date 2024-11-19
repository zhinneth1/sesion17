function saludar(){
    alert("Bienvenidos!!")
}
// Validación de formulario
const form = document.getElementById('contact');
form.addEventListener('submit', function(event) {
 const name = document.getElementById('nombre').value;
 const email = document.getElementById('email').value;
 if (name === '' || email === '') {
 alert('Por favor, ingrese todos los datos correspondientes. Son obligatorios');
 event.preventDefault();
 } else {
 alert('¡Formulario correcto!');
 }
})