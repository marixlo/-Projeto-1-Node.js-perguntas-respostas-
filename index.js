const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    var nome = "Bruno vitor";
    var lang = " javascript"
    var exibirMSG = true;
    res.render("index",{
        nome: nome,
        msg: exibirMSG
 
        
    });
});
app.listen(3000, () => { console.log(" app rodando!");});