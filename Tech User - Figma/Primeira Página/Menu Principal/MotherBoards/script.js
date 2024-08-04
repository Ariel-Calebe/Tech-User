document.addEventListener("DOMContentLoaded", function() {

    var i = 0;
    var select = document.getElementById("seletor");
    var setaAsrock =  document.getElementById("setaASRock");
    var setaAsus = document.getElementById("setaAsus");
    var setaEcs = document.getElementById("setaECS");
    var setaEvga = document.getElementById("setaEVGA");
    var setaGyga = document.getElementById("setaGyga");
    var setaNzxt = document.getElementById("setaNZXT");
    var setaMsi = document.getElementById("setaMSI");

    //-------------

    var back = document.getElementById("Escolha");
    var Asus = document.getElementById("Asus");
    var asrock = document.getElementById("asrock");
    var ECS = document.getElementById("ECS");
    var EVGA = document.getElementById("EVGA");
    var Gyga = document.getElementById("Gyga");
    var NZXT = document.getElementById("NZXT");
    var MSI = document.getElementById("MSI");

    //-----------

    var placaNzxt = document.getElementById("container_NZXT");
    var iSelect = 0;

    select.addEventListener("click", function() {

        if (iSelect === 0){

        }else {

        iSelect = 0;
        back.style.opacity = 0;
        
        placaNzxt.style.visibility = 'hidden';
        placaNzxt.style.opacity = 0;

        select.style.marginLeft = '35vw' ;
        setTimeout(function() {

            back.style.opacity = 1;
            back.textContent = "Escolha a Fabricante ";


        }, 650);
        }

        if (i === 0) {
    
            setaAsrock.style.visibility = 'visible';
            setaAsrock.style.opacity = 1;
            setaAsus.style.visibility = 'visible';
            setaAsus.style.opacity = 1;
            setaEcs.style.visibility = 'visible';
            setaEcs.style.opacity = 1;
            setaEvga.style.visibility = 'visible';
            setaEvga.style.opacity = 1;
            setaGyga.style.visibility = 'visible';
            setaGyga.style.opacity = 1;
            setaNzxt.style.visibility = 'visible';
            setaNzxt.style.opacity = 1;
            setaMsi.style.visibility = 'visible';
            setaMsi.style.opacity = 1;

            //---SETAS---\\
            
            asrock.style.visibility = 'visible';
            asrock.style.opacity = 1;
            Asus.style.visibility = 'visible';
            Asus.style.opacity = 1;
            ECS.style.visibility = 'visible';
            ECS.style.opacity = 1;
            EVGA.style.visibility = 'visible';
            EVGA.style.opacity = 1;
            Gyga.style.visibility = 'visible';
            Gyga.style.opacity = 1;
            NZXT.style.visibility = 'visible';
            NZXT.style.opacity = 1;
            MSI.style.visibility = 'visible';
            MSI.style.opacity = 1;

            i++;  

        }else {

            setaAsrock.style.opacity = 0;
            setaAsus.style.opacity = 0;
            setaEcs.style.opacity = 0;
            setaEvga.style.opacity = 0;
            setaGyga.style.opacity = 0;
            setaNzxt.style.opacity = 0;
            setaMsi.style.opacity = 0;
            asrock.style.visibility = 'hidden';
            asrock.style.opacity = 0;
            Asus.style.visibility = 'hidden';
            Asus.style.opacity = 0;
            ECS.style.visibility = 'hidden';
            ECS.style.opacity = 0;
            EVGA.style.visibility = 'hidden';
            EVGA.style.opacity = 0;
            Gyga.style.visibility = 'hidden';
            Gyga.style.opacity = 0;
            NZXT.style.visibility = 'hidden';
            NZXT.style.opacity = 0;
            MSI.style.visibility = 'hidden';
            MSI.style.opacity = 0;
            


            i--;

        }
    }
    )

    NZXT.addEventListener("click", function () {

        iSelect++;
        back.style.opacity = 0;
        setaAsrock.style.opacity = 0;
        setaAsus.style.opacity = 0;
        setaEcs.style.opacity = 0;
        setaEvga.style.opacity = 0;
        setaGyga.style.opacity = 0;
        setaNzxt.style.opacity = 0;
        setaMsi.style.opacity = 0;
        asrock.style.visibility = 'hidden';
        asrock.style.opacity = 0;
        Asus.style.visibility = 'hidden';
        Asus.style.opacity = 0;
        ECS.style.visibility = 'hidden';
        ECS.style.opacity = 0;
        EVGA.style.visibility = 'hidden';
        EVGA.style.opacity = 0;
        Gyga.style.visibility = 'hidden';
        Gyga.style.opacity = 0;
        NZXT.style.visibility = 'hidden';
        NZXT.style.opacity = 0;
        MSI.style.visibility = 'hidden';
        MSI.style.opacity = 0;

        select.style.marginLeft = '13.5vw' ;
        setTimeout(function() {

            back.style.opacity = 1;
            
            back.textContent = "NZXT ";
            placaNzxt.style.opacity = 1;
            placaNzxt.style.visibility = 'visible';

        }, 650);

    

    })

    EVGA.addEventListener("click", function () {

        iSelect++;
        back.style.opacity = 0;
        setaAsrock.style.opacity = 0;
        setaAsus.style.opacity = 0;
        setaEcs.style.opacity = 0;
        setaEvga.style.opacity = 0;
        setaGyga.style.opacity = 0;
        setaNzxt.style.opacity = 0;
        setaMsi.style.opacity = 0;
        asrock.style.visibility = 'hidden';
        asrock.style.opacity = 0;
        Asus.style.visibility = 'hidden';
        Asus.style.opacity = 0;
        ECS.style.visibility = 'hidden';
        ECS.style.opacity = 0;
        EVGA.style.visibility = 'hidden';
        EVGA.style.opacity = 0;
        Gyga.style.visibility = 'hidden';
        Gyga.style.opacity = 0;
        NZXT.style.visibility = 'hidden';
        NZXT.style.opacity = 0;
        MSI.style.visibility = 'hidden';
        MSI.style.opacity = 0;

        select.style.marginLeft = '12.5vw' ;
        setTimeout(function() {

            back.style.opacity = 1;
            
            back.textContent = "EVGA";
            placaNzxt.style.opacity = 1;
            placaNzxt.style.visibility = 'visible';

        }, 650);

    

    })


}
)