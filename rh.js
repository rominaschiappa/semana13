let listaFuncionarios = document.getElementById("listaFuncionarios");
let nombreFuncionarioInput = document.getElementById("nombreFuncionario");
let funcionarios = [];

function agregarFuncionario() {
    let nombreFuncionario = nombreFuncionarioInput.value;
    if (nombreFuncionario) {
        funcionarios.push(nombreFuncionario);
        nombreFuncionarioInput.value = "";
        displayFuncionarios();
    }
}

function displayFuncionarios() {
    listaFuncionarios.innerHTML = "";
    funcionarios.forEach(function (funcionario) {
        let li = document.createElement("li");
        li.textContent = funcionario;
        listaFuncionarios.appendChild(li);
    });
}