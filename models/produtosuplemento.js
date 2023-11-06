const mongoose = require('mongoose');
const ProdutoSuplementoSchema = new mongoose.Schema({
    id_produtosuplemento : {type : Number, required : true },
    descricao : {type : String, required: false},
    marca : {type : String, required: false},
    dataValidade : {type : Date, required: false},
    quantEstoque : {type : Date, required: false}
});

const User = mongoose.model('User', UserSchema);
module.exports = Produto;