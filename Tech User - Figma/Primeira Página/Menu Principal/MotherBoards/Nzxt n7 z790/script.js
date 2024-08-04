document.addEventListener("DOMContentLoaded", function() {

    var tableSocket = document.getElementById("tableSocket");
    var tableMemory = document.getElementById("tableMemory");
    var tableExpansion = document.getElementById("tableExpansion")
    var tableStorage = document.getElementById("tableStorage");
    var tableLan = document.getElementById("tableLan");
    var tableGeneral = document.getElementById("tableGeneral");

    var socketAngle = document.getElementById("Asocket");
    var memoryAngle  =  document.getElementById("Amemory");
    var expansionAngle = document.getElementById("Aexpansion");
    var storageAngle = document.getElementById("Astorage");
    var lanAngle = document.getElementById("Alan");
    var generalAngle = document.getElementById("Ageneral");

    var iSocket = 0;
    var iMemory = 0;
    var iExpansion = 0;
    var iStorage = 0;
    var iLan = 0;
    var iGeneral = 0;




    socketAngle.addEventListener("click", function () {

        if (iSocket === 0){

            socketAngle.style.rotate = '180deg';

            tableSocket.style.display = 'block';
            tableSocket.style.visibility = 'visible';
            tableSocket.style.opacity = 1;

            memoryAngle.style.rotate = '0deg';
            storageAngle.style.rotate = '0deg';
            expansionAngle.style.rotate = '0deg';
            lanAngle.style.rotate = '0deg';
            generalAngle.style.rotate = '0deg';
            

            tableMemory.style.display = 'none';
            tableExpansion.style.display = 'none'
            tableExpansion.style.visibility = 'hidden';
            tableStorage.style.display = 'none';
            tableStorage.style.display = 'hidden';
            tableLan.style.display = 'none';
            tableLan.style.visibility = 'hidden';
            tableGeneral.style.display = 'none';
            tableGeneral.style.visibility = 'hidden';

            iSocket++;

        }else {

            tableSocket.style.display = 'none';
            socketAngle.style.rotate = '0deg';
            tableSocket.style.visibility = 'hidden';

            iSocket--;
        }
    }
    )

    memoryAngle.addEventListener("click", function (){

        if (iMemory === 0){

            memoryAngle.style.rotate = '180deg';

            
            tableMemory.style.display = 'block';
            tableMemory.style.visibility = 'visible';
            tableMemory.style.opacity = 1;

            socketAngle.style.rotate = '0deg';
            expansionAngle.style.rotate = '0deg';
            storageAngle.style.rotate = '0deg';
            lanAngle.style.rotate = '0deg';
            generalAngle.style.rotate = '0deg';
            

            tableStorage.style.display = 'none';
            tableStorage.style.display = 'hidden';
            tableSocket.style.display = 'none'
            tableSocket.style.visibility = 'hidden';
            tableExpansion.style.display = 'none';
            tableExpansion.style.visibility = 'hidden';
            tableLan.style.display = 'none';
            tableLan.style.visibility = 'hidden';
            tableGeneral.style.display = 'none';
            tableGeneral.style.visibility = 'hidden';

            iMemory++;
        }else {

            memoryAngle.style.rotate = '0deg';

            tableSocket.style.visibility = 'hidden'

            tableMemory.style.display = 'none';
            tableMemory.style.visibility = 'hidden';
            tableMemory.style.opacity = 0;

            iMemory--;
        }



    }
    )

    expansionAngle.addEventListener("click", function (){

        if (iExpansion === 0){

            expansionAngle.style.rotate = '180deg';

            tableExpansion.style.display = 'block';
            tableExpansion.style.visibility = 'visible';
            tableExpansion.style.opacity = 1;

            socketAngle.style.rotate = '0deg';
            memoryAngle.style.rotate = '0deg';
            storageAngle.style.rotate = '0deg';
            lanAngle.style.rotate = '0deg';
            generalAngle.style.rotate = '0deg';

            tableStorage.style.display = 'none';
            tableStorage.style.display = 'hidden';
            tableSocket.style.display = 'none';
            tableSocket.style.visibility = 'hidden';
            tableMemory.style.display = 'none';
            tableMemory.style.visibility = 'hidden';
            tableLan.style.display = 'none';
            tableLan.style.visibility = 'hidden';
            tableGeneral.style.display = 'none';
            tableGeneral.style.visibility = 'hidden';

            iExpansion++;
        }else {

            expansionAngle.style.rotate = '0deg';

            tableExpansion.style.display = 'none';
            tableExpansion.style.visibility = 'hidden';
            tableExpansion.style.opacity = 0;

            tableSocket.style.visibility = 'hidden';
            tableMemory.style.visibility = 'hidden';

            iExpansion--;
        }



    }
    )
    
    storageAngle.addEventListener("click", function (){

        if (iStorage === 0){

            storageAngle.style.rotate = '180deg';

            tableStorage.style.display = 'block';
            tableStorage.style.visibility = 'visible';
            tableStorage.style.opacity = 1;

            
            socketAngle.style.rotate = '0deg';
            memoryAngle.style.rotate = '0deg';
            expansionAngle.style.rotate = '0deg';
            lanAngle.style.rotate = '0deg';
            generalAngle.style.rotate = '0deg';

            tableSocket.style.display = 'none'
            tableSocket.style.visibility = 'hidden';
            tableMemory.style.display = 'none'
            tableMemory.style.visibility = 'hidden';
            tableExpansion.style.display = 'none'
            tableExpansion.style.visibility = 'hidden';
            tableLan.style.display = 'none';
            tableLan.style.visibility = 'hidden';
            tableGeneral.style.display = 'none';
            tableGeneral.style.visibility = 'hidden';

            iStorage++;
        }else {

            storageAngle.style.rotate = '0deg';

            tableStorage.style.display = 'none';
            tableStorage.style.visibility = 'hidden';
            tableStorage.style.opacity = 0;

            tableSocket.style.visibility = 'hidden';
            tableMemory.style.visibility = 'hidden';

            iStorage--;
        }



    }
    )

    lanAngle.addEventListener("click", function () {

        if (iLan === 0){

            tableLan.style.transitionProperty = 'opacity, visibility';
            tableLan.style.transitionDuration = '0.6s';
            tableLan.style.transitionTimingFunction = 'ease';




            lanAngle.style.rotate = '180deg';

            tableLan.style.display = 'block';
            tableLan.style.visibility = 'visible';
            tableLan.style.opacity = 1;

            socketAngle.style.rotate = '0deg';
            memoryAngle.style.rotate = '0deg';
            storageAngle.style.rotate = '0deg';
            expansionAngle.style.rotate = '0deg';
            generalAngle.style.rotate = '0deg';

            tableSocket.style.display = 'none';
            tableSocket.style.visibility = 'hidden'
            tableMemory.style.display = 'none';
            tableMemory.style.visibility = 'hidden';
            tableExpansion.style.display = 'none';
            tableExpansion.style.visibility = 'hidden';
            tableStorage.style.display = 'none';
            tableStorage.style.display = 'hidden';
            tableGeneral.style.display = 'none';
            tableGeneral.style.visibility = 'hidden';




            iLan++;

        }else {

            tableLan.style.display = 'none';
            lanAngle.style.rotate = '0deg';
            tableLan.style.visibility = 'hidden';

            iLan--;
        }
    }
    )

    generalAngle.addEventListener("click", function () {

        if (iGeneral === 0){

            tableGeneral.style.transitionProperty = 'opacity, visibility';
            tableGeneral.style.transitionDuration = '0.6s';
            tableGeneral.style.transitionTimingFunction = 'ease';




            generalAngle.style.rotate = '180deg';

            tableGeneral.style.display = 'block';
            tableGeneral.style.visibility = 'visible';
            tableGeneral.style.opacity = 1;

            socketAngle.style.rotate = '0deg';
            memoryAngle.style.rotate = '0deg';
            storageAngle.style.rotate = '0deg';
            expansionAngle.style.rotate = '0deg';
            lanAngle.style.rotate = '0deg';
            
            tableSocket.style.display = 'none';
            tableSocket.style.visibility = 'hidden'
            tableMemory.style.display = 'none';
            tableMemory.style.visibility = 'hidden';
            tableExpansion.style.display = 'none';
            tableExpansion.style.visibility = 'hidden';
            tableStorage.style.display = 'none';
            tableStorage.style.display = 'hidden';
            tableLan.style.display = 'none';
            tableLan.style.visibility = 'hidden';




            iGenereal++;

        }else {

            tableGeneral.style.display = 'none';
            generalAngle.style.rotate = '0deg';
            tableGeneral.style.visibility = 'hidden';

            iGenereal--;
        }
    }
    )













































}
)