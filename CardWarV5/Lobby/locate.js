function redirection() {
    location.href = "../Game/index.html"
}

function mostrarOcultarReglas() {
    const reglas = document.getElementById("reglas");
    const boton = document.getElementById("botonReglas");
  
    if (reglas.style.display === "none") {
      reglas.style.display = "block"; 
      boton.textContent = "Hide Rules"; 
    } else {
      reglas.style.display = "none"; 
      boton.textContent = "Show Rules"; 
    }
  }
  
 
  document.getElementById("botonReglas").addEventListener("click", mostrarOcultarReglas);
  