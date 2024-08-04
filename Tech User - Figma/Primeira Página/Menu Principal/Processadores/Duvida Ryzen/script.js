document.addEventListener("DOMContentLoaded", function() {
    let familyTexto = document.getElementById("familyTexto");
    let family = document.getElementById("family");
    let setaFamily = document.getElementById("setaFamily");
    let Gen = document.getElementById("gene");
    let setaGen = document.getElementById("setaGen");
    let GenTexto = document.getElementById("GenTexto");
    let setaSu = document.getElementById("setaSu");
    let SuTexto = document.getElementById("SuTexto");
    let Su = document.getElementById("Su");

    
    Gen.addEventListener("click",function() {
        toggleVisibility(GenTexto, setaGen);
    })

    Per.addEventListener("click",function() {
        toggleVisibility(PerTexto, setaPer);
    })

    family.addEventListener("click", function() {
        toggleVisibility(familyTexto, setaFamily);
    });
    Su.addEventListener("click",function() {
        toggleVisibility(SuTexto, setaSu);
    })

    function toggleVisibility(textElement, setaElement) {
        if (textElement.style.opacity == 1) {
            textElement.style.opacity = 0;
            setaElement.style.opacity = 0;
            setTimeout(function() { textElement.style.display = 'none'; }, 600);
        } else {
            textElement.style.display = 'block';
            setTimeout(function() { textElement.style.opacity = 1; setaElement.style.opacity = 1; }, 50);
        }
    }
});
