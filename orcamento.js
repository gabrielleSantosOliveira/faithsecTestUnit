// const mensagemErro = document.getElementById('mensagemErro');

// const name = document.getElementById("idNome");
// var booleanName = true
// const tablet = document.getElementById("idTablet");
// var booleanTablet = true
// const leito = document.getElementById("idLeito");
// var booleanLeito = true
// const quarto = document.getElementById("idQuarto");
// var booleanQuarto = true

// const butao = document.getElementById("idEnviar");

// Função para validar campos com quantidades

function validateFields(name, tablet, leito, quarto) {

    if (name === "") {
        booleanName = false
    } else {
        booleanName = true
    }

    if (isNaN(tablet)) {
        booleanTablet = false
    } else if (tablet.value < 2) {
        booleanTablet = false
    } else {
        booleanTablet = true
    }


    if (isNaN(leito)) {
        booleanLeito = false
    } else if (leito < 100) {
        booleanLeito = false
    } else {
        booleanLeito = true
    }


    if (isNaN(quarto)) {
        booleanQuarto = false
    } else if (quarto < 50) {
        booleanQuarto = false
    } else {
        booleanQuarto = true
    }

    if (
        booleanName == true &&
        booleanTablet == true &&
        booleanLeito == true &&
        booleanQuarto == true
    ) { return true } else { return false }

}

// butao.onclick((event) => validateFields(event))

// // // Função de validação com parâmetros
// // function validateField(inputId) {
// //     const form = document.getElementById("myForm");
// //     const input = document.getElementById(inputId);

// //     form.addEventListener('submit', function (event) {
// //         if (input.value.trim() === '') {
// //             // Previne o envio do formulário se o campo estiver vazio
// //             event.preventDefault();
// //             mensagemErro.textContent = 'Preencha o campo Nome';
// //         }
// //     });
// // }

// // // Chama a função de validação passando os IDs dos elementos
// // validateField('idNome');


// // Função para buscar o endereço pelo CEP
// function buscarEndereco(cep) {

//     if (cep.length !== 8) {
//         mensagemErro.textContent = 'CEP inválido. Deve ter 8 dígitos.';
//         document.getElementById('idBairo').value = '';
//         document.getElementById('idRua').value = '';
//         return;
//     }

//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.erro) {
//                 mensagemErro.textContent = 'CEP não encontrado.';
//                 document.getElementById('idBairo').value = '';
//                 document.getElementById('idRua').value = '';
//             } else {
//                 mensagemErro.textContent = '';
//                 document.getElementById('idBairo').value = data.bairro;
//                 document.getElementById('idRua').value = data.logradouro;
//             }
//         })
//         .catch(error => {
//             mensagemErro.textContent = 'Erro ao buscar o CEP.';
//             console.error('Erro ao buscar o CEP:', error);
//         });
// }

// // Função debounce para limitar a frequência das chamadas de busca
// function debounce(func, delay) {
//     let timeout;
//     return function (...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func(...args), delay);
//     };
// }

// // Função a ser executada quando o usuário digita no campo de CEP
// function onCepInput() {
//     const cepInput = document.getElementById('idCep');
//     const cep = cepInput.value.replace(/\D/g, '');
//     buscarEndereco(cep);
// }

// // Adiciona o evento de input ao campo de CEP com debounce
// document.getElementById('idCep').addEventListener('input', debounce(onCepInput, 500));


module.exports = { validateFields }