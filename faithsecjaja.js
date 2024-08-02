// .error {
//     color: red;
//     display: none;
// } //tem em todos

//nome da empresa no orçamento 
{/* <form id="myForm">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
        <span id="error-message" class="error">O nome é obrigatório.</span>
        <br><br>
        <button type="submit">Enviar</button>
    </form> */}

const mensagemErro = document.getElementById('mensagemErro');


// Função de validação com parâmetros
function validateField(formId, inputId) {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);

    form.addEventListener('submit', function (event) {
        if (input.value.trim() === '') {
            // Previne o envio do formulário se o campo estiver vazio
            event.preventDefault();
            mensagemErro.textContent = 'Preencha o campo Nome';
        }
    });
}

// Chama a função de validação passando os IDs dos elementos
validateField('myForm', 'idNome');


//quantidade de tablet
{/* <label for="number">Qnt de tablet:</label>
        <input type="number" id="number" name="number" required>
        <span id="error-message" class="error">O valor informado foi anteriormente informado:</span>
        <br><br>
        <button type="submit">Enviar</button> */}

// Função de validação com parâmetros
// function validateNumberField(formId, inputId, errorMessageId, minValue) {
//     const form = document.getElementById(formId);
//     const input = document.getElementById(inputId);

//     form.addEventListener('submit', function (event) {
//         const value = parseFloat(input.value.trim());

//         if (isNaN(value)  ) {
//             // Previne o envio do formulário se o valor não for numérico ou não for maior que o valor mínimo
//             event.preventDefault();
//             mensagemErro.textContent = 'Preencha a quantidade de tablets';
//         } else if(value < minValue) {
//             // Oculta a mensagem de erro e permite o envio do formulário
//             mensagemErro.textContent = 'A quantidade mínima de tablets é 2';
//         }
//     });
// }

// Chama a função de validação passando os IDs dos elementos e o valor mínimo
// validateNumberField('myForm', 'idTablet', 'error-message', 2);

//quantidade de leito
{/* <form id="leitosForm">
        <label for="leitos">Quantidade de Leitos (diferente de 100):</label>
        <input type="number" id="leitos" name="leitos" required>
        <span id="error-message" class="error">Número informado anteriormente. A quantidade deve ser diferente de 100.</span>
        <br><br>
        <button type="submit">Enviar</button>
    </form> */}

// Função de validação com parâmetros
// function validateLeitosField(formId, inputId, errorMessageId, invalidValue) {
//     const form = document.getElementById(formId);
//     const input = document.getElementById(inputId);

//     form.addEventListener('submit', function (event) {
//         const value = parseFloat(input.value.trim());

//         if (isNaN(value) ) {
//             // Previne o envio do formulário se o valor for igual ou menor que o valor inválido
//             event.preventDefault();
//             mensagemErro.textContent = 'Preencha a quantidade de leitos';
//         } else if(value <= invalidValue) {
//             // Oculta a mensagem de erro e permite o envio do formulário
//             mensagemErro.textContent = 'A quantidade mínima de leitos é 100';
//         }
//     });
// }

function validateFields(formId, inputId, errorMessage, minQuant,field) {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);

    form.addEventListener('submit', function (event) {
        const value = parseFloat(input.value.trim());

        if (isNaN(value) ) {
            // Previne o envio do formulário se o não tiver prenchido
            event.preventDefault();
            mensagemErro.textContent = `Preencha a quantidade de ${field}`;
        } else if(value < minQuant) {
            // Previne o envio do formulário se o valor for menor que o valor minimo
            mensagemErro.textContent = `${errorMessage} ${minQuant}`;
        }
    });
}

// Chama a função de validação passando os IDs dos elementos e o valor inválido (100)
// validateLeitosField('myForm', 'idLeito', 'error-message', 100);

validateFields('myForm', 'idQuarto', 'A quantidade mínima de quartos é', 50, "quartos");
validateFields('myForm', 'idLeito', 'A quantidade mínima de leitos é ', 100, "leitos")
validateFields('myForm', 'idTablet', 'A quantidade mínima de tablet é ', 2, "tablets")


// Função para buscar o endereço pelo CEP
function buscarEndereco(cep) {

    if (cep.length !== 8) {
        mensagemErro.textContent = 'CEP inválido. Deve ter 8 dígitos.';
        document.getElementById('idBairo').value = '';
        document.getElementById('idRua').value = '';
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                mensagemErro.textContent = 'CEP não encontrado.';
                document.getElementById('idBairo').value = '';
                document.getElementById('idRua').value = '';
            } else {
                mensagemErro.textContent = '';
                document.getElementById('idBairo').value = data.bairro;
                document.getElementById('idRua').value = data.logradouro;
            }
        })
        .catch(error => {
            mensagemErro.textContent = 'Erro ao buscar o CEP.';
            console.error('Erro ao buscar o CEP:', error);
        });
}

// Função debounce para limitar a frequência das chamadas de busca
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

// Função a ser executada quando o usuário digita no campo de CEP
function onCepInput() {
    const cepInput = document.getElementById('idCep');
    const cep = cepInput.value.replace(/\D/g, '');
    buscarEndereco(cep);
}

// Adiciona o evento de input ao campo de CEP com debounce
document.getElementById('idCep').addEventListener('input', debounce(onCepInput, 500));
