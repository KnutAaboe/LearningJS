"use strict"

//User adding new country to database
function send(){

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/Countries", true) 
    xhr.setRequestHeader("Content-Type", "application/json");

    //Using how many countries that exist on the webpage to come up with the id to the next country
    let id = `{"id": ${countriesExist + 1}}`
    let newCountry = JSON.parse(id)
    
    //Getting all inputs under form => getting value from each of them and adding that to the json database
    const userInputs = document.forms["countryForm"].getElementsByTagName("input");
    const loopLength = userInputs.length-1;
        for (let i = 0; i < loopLength; i++){
            if (userInputs[i].value != "" && userInputs[i].type == "text"){
                let inputValue;
                countryJSON[i] == "Area" ? inputValue = userInputs[i].value + " km²" : inputValue = userInputs[i].value 
                newCountry[countryJSON[i]] = inputValue 
            }
    }
    const printCountry = JSON.stringify(newCountry)
    xhr.send(printCountry)
}