const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/usuario");
const User = require("../models/produtosuplemento");

router.post("/usuario", async(req, res) => {
    console.log(req);
    const email = req.body.email;
    const password = req.body.password;

    if (email == null){
        return res.status(400).json({error : "Por favor, preencha seu email"});
    }

    try {
        const newUser = await usuario.save();

        const token = jwt.sign(

            {
            name : newUser.name,
            id : newUser._id
            },
            "segredo"
        );

        res.json({
            error: null, 
            msg: "Você fez o cadastro com sucesso!!!", 
            token: token, 
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

    try {
        const newProduto = await produtosuplemento.save();

        const token = jwt.sign(

            {
            name : newProduto.name,
            id : newProduto._id
            },
            "segredo"
        );

        res.json({
            error: null, 
            msg: "Cadastro do produto feito com sucesso!!!", 
            token: token, 
            userId: newProduto._id
        });
    } catch(error){
        res.status(400).json({error});
    }
});

module.exports = router;