"use strict"


//Generate XMLHttpRequest 
var xhr = new XMLHttpRequest();

function deleteCountry(idOfCountry){
    // var xhr = new XMLHttpRequest();
    

    xhr.open("DELETE", "http://localhost:5000/Countries/"+idOfCountry, true) 

    xhr.send()
}

function updateAfterDelete(idOfCountry){

    //Get the data out of the last country
    getCountry((countriesExist), function () {
            let lastCountry = JSON.parse(this.responseText);
            // var xhr = new XMLHttpRequest();
            // console.log(lastCountry)
            lastCountry.id = parseInt(idOfCountry);
            // console.log(lastCountry)
            deleteCountry(countriesExist)
            xhr.open("POST", "http://localhost:5000/Countries", true) 
            xhr.setRequestHeader("Content-Type", "application/json");
            
            const countrySend = JSON.stringify(lastCountry)
            xhr.send(countrySend)
        })


}