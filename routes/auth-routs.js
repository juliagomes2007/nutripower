const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/usuario");
const Produto = require("../models/produtosuplemento");

router.post("/usuario", async(req, res) => {
    console.log(req);
    const email = req.body.email;
    const password = req.body.password;

    if (email == null){
        return res.status(400).json({error : "Por favor, preencha seu email"});
    }

    const emailExists = await User.findOne({email : email});
    if(emailExists){
        return res.status(400).json({error : "O e-mail informado já existe."})
    }

    try {
        const newUser = await usuario.save();

        res.json({
            error: null, 
            msg: "Você fez o cadastro com sucesso!!!",
            userId: newUser._id
        });
    } catch(error){
        res.status(400).json({error});
    }
});

router.post("/produtosuplemento", async(req, res) => {
    console.log(req);
    const id_produtosuplemento = req.body.id_produtosuplemento;
    const descricao = req.body.descricao;
    const marca = req.body.marca;
    const dataValidade = req.body.dataValidade;
    const quantEstoque = req.body.quantEstoque;

    if (id_produtosuplemento == null){
        return res.status(400).json({error : "Por favor, preencha o id"});
    }

    const produtoExists = await Produto.findOne({id_produtosuplemento : id_produtosuplemento});
    if(produtoExists){
        return res.status(400).json({error : "O produto informado já existe."})
    }

    if(quantEstoque > 24){
        return res.status(400).json({error : "O limite de estoque é de 24 itens."})
    } else if(quantEstoque < 0){
        return res.status(400).json({error : "Insira um número positivo menor ou igual a 24."})
    }

    try {
        const newProduto = await produtosuplemento.save();

        res.json({
            error: null, 
            msg: "Cadastro do produto feito com sucesso!!!",
            userId: newProduto._id
        });
    } catch(error){
        res.status(400).json({error});
    }
});

module.exports = router;