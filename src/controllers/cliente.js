const clientes = require("../../dados/clientes.json") // Certifique-se de que a pasta 'dados' está na raiz e o arquivo chama cliente.json

const listar = (req, res) => {
    res.json(clientes) // Corrigido de res,json para res.json
}

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    clientes.forEach(cliente => { // Alterado de pedidos.forEach para clientes.forEach
        if (cliente.id == id) {
            cliente.cpf = dados.cpf; // Ajustado para os campos reais do seu cliente.json
            cliente.nome = dados.nome;
        }
    });
    res.json("Cliente atualizado com sucesso");
};

const excluir = (req, res) => {
    const id = req.params.id;

    clientes.forEach((cliente, indice) => { // Alterado de pedidos para clientes
        if (cliente.id == id) {
            clientes.splice(indice, 1);
        }
    });
    res.json("Cliente excluído com sucesso");
};

const criar = (req, res) => {
    const dados = req.body;
    if(req.body) {
        const novoID = clientes.length + 1;
        req.body.id = novoID;
        clientes.push(req.body);
        res.send("Cliente cadastrado com sucesso"); // Corrigido de req.send para res.send
    } else {
        res.send("Não foi possível cadastrar o cliente");
    }
}

module.exports = { // Corrigido de module.expots para module.exports
    criar, listar, alterar, excluir
}
