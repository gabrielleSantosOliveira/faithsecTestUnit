// formulario.js

// Função principal que configura o formulário após o carregamento da página
function configurarFormulario() {
    const form = document.querySelector('form');
    const cnpjError = document.getElementById('cnpj-error');
    const telefoneError = document.getElementById('telefone-error');
    const mensagemError = document.getElementById('mensagem-error');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        processarFormulario(event, cnpjError, telefoneError, mensagemError, successMessage, form);
    });
}

// Função para processar o envio do formulário
function processarFormulario(event, cnpjError, telefoneError, mensagemError, successMessage, form) {
    event.preventDefault(); // Previne o envio do formulário para validar

    // Limpa mensagens de erro e de sucesso anteriores
    cnpjError.textContent = '';
    telefoneError.textContent = '';
    mensagemError.textContent = '';
    successMessage.textContent = '';

    // Valida CNPJ
    const cnpj = document.getElementById('cnpj').value;
    if (!validarCNPJ(cnpj)) {
        cnpjError.textContent = 'CNPJ inválido.';
        return;
    }

    // Valida Telefone
    const telefone = document.getElementById('telefone').value;
    if (!validarTelefone(telefone)) {
        telefoneError.textContent = 'Telefone inválido.';
        return;
    }

    // Valida Mensagem
    const mensagem = document.getElementById('mensagem').value;
    if (mensagem.trim() === '') {
        mensagemError.textContent = 'Mensagem não pode estar vazia.';
        return;
    }

    // Se todas as validações passarem
    successMessage.textContent = 'Formulário enviado com sucesso!';
    successMessage.style.color = 'green';
    form.reset(); // Opcional: Limpa o formulário após o envio
}

// Função de validação de CNPJ (exemplo básico)
function validarCNPJ(cnpj) {
    // Implementar validação real de CNPJ aqui
    return cnpj.length === 14; // Exemplo simplificado
}

// Função de validação de Telefone (exemplo básico)
function validarTelefone(telefone) {
    // Implementar validação real de telefone aqui
    return telefone.length >= 10; // Exemplo simplificado
}

// Adiciona o evento de carregamento da página
document.addEventListener('DOMContentLoaded', configurarFormulario);





// // validar-telefone.js

// function validarTelefone(telefone) {
//     // Remove caracteres não numéricos
//     telefone = telefone.replace(/[^\d]/g, '');

//     // Expressão regular para validar número de telefone brasileiro
//     const regex = /^(?:\d{10}|\d{11})$/;

//     return regex.test(telefone);
// }

// // Função para verificar se o campo Telefone é válido ao enviar o formulário
// function verificarTelefoneForm() {
//     const telefoneInput = document.getElementById('telefone');
//     const telefoneError = document.getElementById('telefone-error');
//     const telefone = telefoneInput.value;

//     if (!validarTelefone(telefone)) {
//         telefoneError.textContent = 'Número de telefone inválido!';
//         telefoneError.style.display = 'block'; // Exibe a mensagem de erro
//         telefoneInput.focus();
//         return false; // Impede o envio do formulário
//     }

//     telefoneError.textContent = ''; // Limpa a mensagem de erro
//     telefoneError.style.display = 'none'; // Oculta a mensagem de erro
//     return true; // Permite o envio do formulário
// }

// // Adiciona o evento de validação ao formulário
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', (event) => {
//         const isCNPJValid = verificarCNPJForm(); // Valida CNPJ
//         const isTelefoneValid = verificarTelefoneForm(); // Valida Telefone

//         if (!isCNPJValid || !isTelefoneValid) {
//             event.preventDefault(); // Evita o envio do formulário se algum campo for inválido
//         }
//     });
// });



// // validar-cnpj.js

// function validarCNPJ(cnpj) {
//     cnpj = cnpj.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

//     if (cnpj.length !== 14) return false; // Verifica o comprimento do CNPJ

//     // Valida os CNPJs conhecidos como inválidos
//     const cnpjInvalidos = [
//         '00000000000000', '11111111111111', '22222222222222', '33333333333333',
//         '44444444444444', '55555555555555', '66666666666666', '77777777777777',
//         '88888888888888', '99999999999999'
//     ];

//     if (cnpjInvalidos.includes(cnpj)) return false;

//     // Função para calcular o dígito verificador
//     const calcularDigito = (cnpj, peso) => {
//         let soma = 0;
//         for (let i = 0; i < peso.length; i++) {
//             soma += cnpj[i] * peso[i];
//         }
//         let resultado = soma % 11;
//         return resultado < 2 ? 0 : 11 - resultado;
//     };

//     // Cálculo dos dígitos verificadores
//     const peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
//     const peso2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

//     const digito1 = calcularDigito(cnpj.slice(0, 12), peso1);
//     const digito2 = calcularDigito(cnpj.slice(0, 12) + digito1, peso2);

//     // Verifica se os dígitos verificadores estão corretos
//     return cnpj[12] == digito1 && cnpj[13] == digito2;
// }

// // Função para verificar se o campo CNPJ é válido ao enviar o formulário
// function verificarCNPJForm() {
//     const cnpjInput = document.getElementById('cnpj');
//     const cnpjError = document.getElementById('cnpj-error');
//     const cnpj = cnpjInput.value;

//     if (!validarCNPJ(cnpj)) {
//         cnpjError.textContent = 'CNPJ inválido!';
//         cnpjInput.focus();
//         return false; // Impede o envio do formulário
//     }

//     cnpjError.textContent = ''; // Limpa a mensagem de erro
//     return true; // Permite o envio do formulário
// }

// // Adiciona o evento de validação ao formulário
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', (event) => {
//         if (!verificarCNPJForm()) {
//             event.preventDefault(); // Evita o envio do formulário se o CNPJ for inválido
//         }
//     });
// });
