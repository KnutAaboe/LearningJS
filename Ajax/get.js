"use strict"

function getCountry(givenId, callback){
    //Generate XMLHttpRequest 
    var xhr = new XMLHttpRequest();

        
        xhr.open("GET", "http://localhost:5000/Countries/"+givenId, true) 

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                if (typeof callback === "function"){
                    callback.apply(xhr)
                }
            }
        }
        xhr.send()

}