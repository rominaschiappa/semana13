let imagenesTemasEstudio = document.getElementById("imagenesTemasEstudio");

async function devolverImagen() {
    try {
        let response = await fetch("https://picsum.photos/");
        let data = await response.json();
        let imagenes = data.map((usuario) => usuario.name);
        imagenesTemasEstudio.innerHTML = imagenes.map((nombre) => `<li>${nombre}</li>`).join("");
    } catch (error) {
        console.error("Error", error);
    }
}

devolverImagen();