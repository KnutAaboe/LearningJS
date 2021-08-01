"use strict"

//What user can type value into
const countryJSON = ["Country", "Ruler", "Capital", "Area", "Population"];

//Variable containing number of coutries added to the page 
let countriesExist;

//Which button is clicked
let buttonClicked;

//If admin resently logged in

//Start function, makes sure the page is loaded before running code
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", run)
} else {
    run();
}

//Code stuff
function run() {
    document.getElementById("newCountry").addEventListener("submit", send);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5000/Countries", true);

    //Looping through all countries and adding them to the page 
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let countries = JSON.parse(this.responseText);
            countriesExist = countries.length;
            // console.log(countriesExist)

            const parentNode = document.getElementById("start")

            //Making html code to each country
            countries.forEach(country => {
                const node = document.createElement("tr")
                parentNode.appendChild(node)

                const idNode = document.createElement("th");
                const countNode = document.createElement("th");
                const rulerNode = document.createElement("th");
                const capitalNode = document.createElement("th");
                const areaNode = document.createElement("th");
                const populationNode = document.createElement("th");

                const id = country.id;
                const count = country.Country;
                const ruler = country.Ruler;
                const capital = country.Capital;
                const area = country.Area;
                const pop = country.Population;

                idNode.appendChild(document.createTextNode(id));
                node.appendChild(idNode);

                countNode.appendChild(document.createTextNode(count));
                node.appendChild(countNode);

                rulerNode.appendChild(document.createTextNode(ruler));
                node.appendChild(rulerNode);

                capitalNode.appendChild(document.createTextNode(capital));
                node.appendChild(capitalNode);

                areaNode.appendChild(document.createTextNode(area));
                node.appendChild(areaNode);

                populationNode.appendChild(document.createTextNode(pop));
                node.appendChild(populationNode);

            });
            

        }
        
    }
    xhr.send();
}

