let listaFuncionarios = document.getElementById("listaFuncionarios");

async function cargarUsuarios() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        let funcionarios = data.map((usuario) => usuario.name);
        listaFuncionarios.innerHTML = funcionarios.map((nombre) => `<li>${nombre}</li>`).join("");
    } catch (error) {
        console.error("Error al cargar funcionarios:", error);
    }
}

cargarUsuarios();