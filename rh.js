const listaFuncionarios = document.getElementById("listaFuncionarios");

async function cargarUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const usuarios = data.map((usuario) => usuario.name);
        listaFuncionarios.innerHTML = usuarios.map((nombre) => `<li>${nombre}</li>`).join("");
    } catch (error) {
        console.error("Error al cargar usuarios:", error);
    }
}

cargarUsuarios();