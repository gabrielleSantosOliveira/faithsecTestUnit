// validar-telefone.js

function validarTelefone(telefone) {
    // Remove caracteres não numéricos
    telefone = telefone.replace(/[^\d]/g, '');

    // Expressão regular para validar número de telefone brasileiro
    const regex = /^(?:\d{10}|\d{11})$/;

    return regex.test(telefone);
}

// Função para verificar se o campo Telefone é válido ao enviar o formulário
function verificarTelefoneForm() {
    const telefoneInput = document.getElementById('telefone');
    const telefoneError = document.getElementById('telefone-error');
    const telefone = telefoneInput.value;

    if (!validarTelefone(telefone)) {
        telefoneError.textContent = 'Número de telefone inválido!';
        telefoneError.style.display = 'block'; // Exibe a mensagem de erro
        telefoneInput.focus();
        return false; // Impede o envio do formulário
    }

    telefoneError.textContent = ''; // Limpa a mensagem de erro
    telefoneError.style.display = 'none'; // Oculta a mensagem de erro
    return true; // Permite o envio do formulário
}

// Adiciona o evento de validação ao formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const isCNPJValid = verificarCNPJForm(); // Valida CNPJ
        const isTelefoneValid = verificarTelefoneForm(); // Valida Telefone

        if (!isCNPJValid || !isTelefoneValid) {
            event.preventDefault(); // Evita o envio do formulário se algum campo for inválido
        }
    });
});
