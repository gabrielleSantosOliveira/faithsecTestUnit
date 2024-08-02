const {verificarCNPJForm} = require('./validarCnpj')

it('Verifica se o cnpj está preenchido e é válido',()=>{
    expect(verificarCNPJForm('26573295000189')).toBe(true)
})