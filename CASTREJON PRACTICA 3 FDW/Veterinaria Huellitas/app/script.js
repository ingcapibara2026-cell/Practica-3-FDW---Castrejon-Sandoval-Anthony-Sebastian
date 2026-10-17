const boton = document.getElementById("btn-enlace");

boton.addEventListener("click", function () {
    const enlace = window.location.href.split("#")[0];
    alert("Enlace de esta página: " + enlace);
});
