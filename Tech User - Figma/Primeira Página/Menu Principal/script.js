document.addEventListener("DOMContentLoaded", function() {

    var down = document.getElementById("direita");
    var up = document.getElementById("esquerda"); 
    var tituloTxt = document.getElementById("TituloProcessador")
    var imgFundo = document.getElementById("FundoP")
    var elemento = document.getElementById("elemento");
    var i = 0;

    down.addEventListener("click", function () {

    if(i === 1){

        i--;
        
        
        tituloTxt.textContent = "⚜ Processadores ⚜"
        tituloTxt.href = "/Tech User - Figma/Primeira Página/Menu Principal/Processadores/index.html"
        imgFundo.src = "/Tech User - Figma/Imagens/Fundo Processadores.png"
        elemento.href = "/Tech User - Figma/Primeira Página/Menu Principal/Processadores/index.html";

    }else {

        i++;

   
        tituloTxt.textContent = "⚜ MotherBoards ⚜"
        tituloTxt.href = "/Tech User - Figma/Primeira Página/Menu Principal/MotherBoards/index.html";
        imgFundo.src = "/Tech User - Figma/Imagens/fundo MotherBoards.png"
        elemento.href = "/Tech User - Figma/Primeira Página/Menu Principal/MotherBoards/index.html";

    }
}
)

up.addEventListener("click", function () {

    if(i === 0){

        i++;
        tituloTxt.textContent = "⚜ MotherBoards ⚜"
        tituloTxt.href = "/Tech User - Figma/Primeira Página/Menu Principal/MotherBoards/index.html"
        imgFundo.src = "/Tech User - Figma/Imagens/fundo MotherBoards.png"
        elemento.href = "/Tech User - Figma/Primeira Página/Menu Principal/MotherBoards/index.html";

    }else {

        i--

        tituloTxt.href = "/Tech User - Figma/Primeira Página/Menu Principal/Processadores/index.html"
        tituloTxt.textContent = "⚜ Processadores ⚜"
        imgFundo.src = "/Tech User - Figma/Imagens/Fundo Processadores.png"
        elemento.href = "/Tech User - Figma/Primeira Página/Menu Principal/Processadores/index.html";
 
    }
}
)




})