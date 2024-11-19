const adicionarNotaBtn = document.getElementById("adicionarNota");
const notaTexto = document.getElementById("notaTexto");
const listaNotas = document.getElementById("listaNotas");

function adicionarNota() {
    const texto = notaTexto.value.trim();

    if (texto === "") {
        alert("Por favor, insira uma nota antes de adicionar!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    const excluirBtn = document.createElement("button");
    excluirBtn.textContent = "Excluir";
    excluirBtn.onclick = () => li.remove();

    li.appendChild(excluirBtn);
    listaNotas.appendChild(li);

    notaTexto.value = "";
}

adicionarNotaBtn.addEventListener("click", adicionarNota);

notaTexto.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        adicionarNota();
    }
});