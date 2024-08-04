document.addEventListener("DOMContentLoaded", function() {
    var popAct = document.getElementById("duvidaP");
    var popUp = document.getElementById("pop-up");
    let bOk =   document.getElementById("textoK");
    function toggleVisibilityAndZIndex(element) {
        // Obtém o valor computado da opacidade
        var computedOpacity = window.getComputedStyle(element).opacity;

        // Alterna a opacidade entre 0 e 1
        if (computedOpacity === "0") {
            element.style.opacity = "1";
            element.style.zIndex = "1"; // Certifique-se de que o zIndex seja um valor positivo
        } else {
            element.style.opacity = "0";
            element.style.zIndex = "-1"; // Z-index negativo para esconder
        }
    }

    function toggleVisibility(element) {
        // Obtém o valor computado da opacidade
        var computedOpacity = window.getComputedStyle(element).opacity;

        // Alterna a opacidade entre 0 e 1
        if (computedOpacity === "0") {
            element.style.opacity = "1";
        } else {
            element.style.opacity = "0";
        }
    }

    popAct.addEventListener("click", function() {
        toggleVisibilityAndZIndex(popUp);
        toggleVisibilityAndZIndex(popAct);
    });

    bOk.addEventListener("click", function(){
        console.log("BOK clicked")
        toggleVisibilityAndZIndex(popUp);
        toggleVisibilityAndZIndex(popAct);

    });


});