const pedidos = require("../../dados/pedidos.json")

const listar = (req, res) => {
    res.json(pedidos) // Corrigido de res,json para res.json
}

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    pedidos.forEach(pedido => {
        if (pedido.id == id) {
            pedido.cliente_id = dados.cliente_id;
            pedido.produto = dados.produtos;
            pedido.preco = dados.preco;
            pedido.quantidade = dados.quantidade;   
        }
    });
    res.json("Pedido atualizado com sucesso");
};

const excluir = (req, res) => {
    const id = req.params.id;

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            pedidos.splice(indice, 1);
        }
    });
    res.json("Pedido excluído com sucesso");
};

const criar = (req, res) => {
    const dados = req.body;
    if(req.body) {
        const novoID = pedidos.length + 1;
        req.body.id = novoID;
        pedidos.push(req.body);
        res.send("Pedido cadastrado com sucesso"); // Corrigido de req.send para res.send
    } else {
        res.send("Não foi possível cadastrar o pedido");
    }
}

module.exports = { // Corrigido de module.expots para module.exports
    criar, listar, alterar, excluir
}
