"use strict"

function change(chosenBtn){
    switch(chosenBtn.id){
        case "removeInputs":
            buttonClicked = "removeInputs";
            document.getElementById("idInput").hidden = true;
            document.getElementById("newCountry").hidden = true;    

            break;
        case "showInputs":
            buttonClicked = "showInputs";
            document.getElementById("idInput").hidden = true;
            document.getElementById("newCountry").hidden = false; 

            break;
        case "removeCountry":
            buttonClicked = chosenBtn.id;
            document.getElementById("idInput").hidden = false;
            document.getElementById("newCountry").hidden = true; 
            document.getElementById("searchedCountry").hidden = true; 
            
            break;

        case "getCountry":
        buttonClicked = chosenBtn.id;
            document.getElementById("idInput").hidden = false;
            document.getElementById("newCountry").hidden = true; 

            break;
        default: 
            // buttonClicked = chosenBtn.id;
            // document.getElementById("idInput").hidden = false;
            // document.getElementById("newCountry").hidden = true;    
            break;
    }
}