const botaocarrinho = document.getElementsByClassName("botaocarrinho")
console.log(botaocarrinho)
for (var i = 0; i < botaocarrinho.length; i++) {
    botaocarrinho[i].addEventListener("click", function(event) {
        console.log(event.target)
    })
}

//const leftside = document.getElementsByClassName("left-side")
//const leftside3 = document.getElementsByClassName("left-side3")
//const leftside4 = document.getElementsByClassName("left-side4")
//for (var i = 0; i < leftside.length; i++) {
   // console.log(leftside[i])
  //  const preco = leftside[i].getElementsByClassName("precoo")[0].innerText.replace("R$", "").replace(",", ".")

    //total = parseInt(preco) + parseInt(preco);
    //console.log(total)
    //total = preco + preco
    
//}
//total = total.toFixed(2)
//total = total.replace(".", ",")
//document.querySelector(".finalizar span").innerText = "R$" + total