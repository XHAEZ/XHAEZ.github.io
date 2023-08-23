document.addEventListener("DOMContentLoaded", function() {
  const botonVerificar = document.getElementById("verificar");
  const nombreInput = document.getElementById("nombre");
  const resultadoDiv = document.getElementById("resultado");

  botonVerificar.addEventListener("click", function() {
    const nombreIngresado = nombreInput.value.toLowerCase(); // Convertir a minúsculas
    const nombreEsperado = "dayana"; // Cambia este nombre por el que deseas verificar

    if (nombreIngresado === nombreEsperado) {
      resultadoDiv.innerHTML = '<img src="https://i.blogs.es/206130/27f3c4a4-c804-4e17-b4da-520dc1b9990b/1366_2000.jpg" alt="Imagen">';
    } else {
      resultadoDiv.innerHTML = '<p>MMMMMMM no eres quien busco</p>';
      resultadoDiv.innerHTML = '<p>Ingresa solo tu primer nombre</p>';
    }
  });
});
