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

document.addEventListener("DOMContentLoaded", function() {
  const botonVerificar = document.getElementById("verificar");
  const nombreInput = document.getElementById("nombre");
  const resultadoDiv = document.getElementById("resultado");

  const imagenesPorInicial = {
    a: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg",
    b: "URL_DE_IMAGEN_PARA_B",
    c: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
    d: "https://i.blogs.es/206130/27f3c4a4-c804-4e17-b4da-520dc1b9990b/1366_2000.jpg",
    e: "https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt95cdb2d55e0d22f4/60ee13f0ba1c655fbc2eef7f/Yuumi_0.jpg",
    f: "https://media.vandal.net/m/9-2020/202091416324415_2.jpg",
    g: "URL_DE_IMAGEN_PARA_G",
    h: "https://theriftcrown.com/wp-content/uploads/2020/07/Screenshot_4.jpg",
    i: "URL_DE_IMAGEN_PARA_I",
    j: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",
    k: "https://d1ki6hjeuoplax.cloudfront.net/images/_article3x_webp/7401930/PsyOps-Ezreal-NOT-PRESTIGE.webp",
    l: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",
    m: "https://gameriv.com/wp-content/uploads/2022/03/Amumu_InfernalSkin-1.jpg",
    n: "URL_DE_IMAGEN_PARA_N",
    o: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_25.jpg",
    p: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",
    q: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",
    r: "URL_DE_IMAGEN_PARA_R",
    s: "URL_DE_IMAGEN_PARA_S",
    t: "URL_DE_IMAGEN_PARA_T",
    u: "https://staticg.sportskeeda.com/editor/2023/01/d3715-16731692259385-1920.jpg",
    v: "URL_DE_IMAGEN_PARA_V",
    w: "URL_DE_IMAGEN_PARA_W",
    x: "URL_DE_IMAGEN_PARA_X",
    y: "URL_DE_IMAGEN_PARA_Y",
    z: "https://media.vandal.net/m/9-2020/202091416324415_1.jpg"
  };

  botonVerificar.addEventListener("click", function() {
    const nombreIngresado = nombreInput.value.trim().toLowerCase();
    const inicialNombre = nombreIngresado.charAt(0);

    if (nombreIngresado.length === 0) {
      resultadoDiv.innerHTML = '<p>Ingresa tu nombre</p>';
    } else if (imagenesPorInicial.hasOwnProperty(inicialNombre)) {
      const imagenURL = imagenesPorInicial[inicialNombre];
      resultadoDiv.innerHTML = `<img src="${imagenURL}" alt="Imagen">`;
    } else {
      resultadoDiv.innerHTML = '<p>No se encontró una imagen para esta inicial</p>';
    }
  });
});
