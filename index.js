

var resposta = prompt("Qual é a sua idade? (digite em número)");
if (resposta >= 16) {
  document.write("Aproveite!");
} else if (resposta <= 16) {
  window.location.href =  "./rodapé/termosdeuso.html";
} else {
    window.location.href = "./rodapé/termosdeuso.html";
}


// idade = "16";

//  if (idade >= 18) {
//     window.location.href = "homeprincipal.html";
// } else if (idade < 18 && idade >= 15) {
//      window.location.href = "homejovem.html";
// } else {
//    window.location.href = "homeinfantil.html";
// }

const Sequelize = require('sequelize')
const sequelize = new Sequelize('BD STEALAR.sql', '1234', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
    }).catch(function(erro){
        console.log("Falha ao se conectar: "+erro)
    })

