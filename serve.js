const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRouter = require("../routes/auth-routes");


const dbName = "nutripower";
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);


app.get("/", (req, res)=> {

    res.json({message : "Rota de teste será trocada!!!"});
});

app.listen(port, ()=>{
    console.log(`O backend está rodando na porta ${port}`)
});


mongoose.connect(
    `mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser : true,
    UseUnifiedTopology : true,
    serverSelectionTimeoutMS : 10000
    });