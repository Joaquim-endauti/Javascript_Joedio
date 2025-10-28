module.exports = {

  cadastrar: (id, descricao, quantidade, valor_unitario) => {

    return `Produto cadastrado com sucesso! \nID: ${id} \nDescrição: ${descricao} \nQuantidade: ${quantidade} \nValor Unitário: R$${valor_unitario}`;
    
        }
    };