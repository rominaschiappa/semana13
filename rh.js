const listaFuncionarios = document.getElementById("listaFuncionarios");
const funcionarios = [];

function agregarFuncionario() {
    const nombreFuncionario = prompt("Ingresar nombre de funcionario:");
    if (nombreFuncionario) {
        funcionarios.push(nombreFuncionario);
        displayFuncionarios();
    }
}

function displayFuncionarios() {
    listaFuncionarios.innerHTML = "";
    funcionarios.forEach(function (funcionario) {
        const li = document.createElement("li");
        li.textContent = funcionario;
        listaFuncionarios.appendChild(li);
    });
}