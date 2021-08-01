"use strict"

function tempName(){

    //ID input
    let givenID = document.getElementById("idUserInput").value;

    //Generate XMLHttpRequest 
    var xhr = new XMLHttpRequest();

    //Delete
    if (buttonClicked === "removeCountry"){

        

        // After delete no countries left, or delete last country in the list
        if (givenID == countriesExist || countriesExist == 1){
            deleteCountry(givenID);
        } else {
            deleteCountry(givenID);
            updateAfterDelete(givenID);
        }


    //Get Country by given id
    } else if (buttonClicked === "getCountry"){
        getCountry(givenID, function () {
            document.getElementById("searchedCountry").innerHTML = this.responseText;

        })


    //remove?
    } else {
    }
//some error stuff?
}

