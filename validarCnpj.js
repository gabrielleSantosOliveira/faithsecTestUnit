// validar-cnpj.js

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (cnpj.length !== 14) return false; // Verifica o comprimento do CNPJ

    // Valida os CNPJs conhecidos como inválidos
    const cnpjInvalidos = [
        '00000000000000', '11111111111111', '22222222222222', '33333333333333',
        '44444444444444', '55555555555555', '66666666666666', '77777777777777',
        '88888888888888', '99999999999999'
    ];

    if (cnpjInvalidos.includes(cnpj)) return false;

    // Função para calcular o dígito verificador
    const calcularDigito = (cnpj, peso) => {
        let soma = 0;
        for (let i = 0; i < peso.length; i++) {
            soma += cnpj[i] * peso[i];
        }
        let resultado = soma % 11;
        return resultado < 2 ? 0 : 11 - resultado;
    };

    // Cálculo dos dígitos verificadores
    const peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const peso2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const digito1 = calcularDigito(cnpj.slice(0, 12), peso1);
    const digito2 = calcularDigito(cnpj.slice(0, 12) + digito1, peso2);

    // Verifica se os dígitos verificadores estão corretos
    return cnpj[12] == digito1 && cnpj[13] == digito2;
}

// const cnpjInput = document.getElementById('cnpj');
// const cnpjError = document.getElementById('cnpj-error');
// const cnpj = cnpjInput.value;
// Função para verificar se o campo CNPJ é válido ao enviar o formulário
function verificarCNPJForm(cnpj) {

    if (!validarCNPJ(cnpj)) {
        // cnpjError.textContent = 'CNPJ inválido!';
        // cnpjInput.focus();
        return false; // Impede o envio do formulário
    } else {
        // cnpjError.textContent = ''; // Limpa a mensagem de erro
        return true; // Permite o envio do formulário
    }
}

// Adiciona o evento de validação ao formulário
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', (event) => {
//         if (!verificarCNPJForm()) {
//             event.preventDefault(); // Evita o envio do formulário se o CNPJ for inválido
//         }
//     });
// });


module.exports={verificarCNPJForm}