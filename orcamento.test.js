const {validateFields} = require('./orcamento')

it('Valida se todos os campos estão corretamente preenchidos',()=>{
    expect(validateFields('a', 2, 100,50)).toBe(true)
})