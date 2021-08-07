"use strict"

$(document).ready(function(){

  const $animals = $("#animals-listing");

    $.ajax({
      type: "GET",
      url: "http://localhost:5000/Animals",
      success: function(animals){
        //Two and two, even if its only 1 left
        //Drop down for each different animal type

        if (!$.trim(animals)){
          $animals.append(`<div class="tt all-adopted"><strong>All animals are adopted</strong></div>`);

        } else {
          $.each(animals, function(i, animal){
            if (i % 2 === 0){
              
              $animals.append(`
              <div class="row temp"> 
              <span id="for-adoption-section" class="col-sm-6 tt"> 
              <img class="for-adoption-img" src="${animal.image}" alt="${animal.type}" />
              <div class="row">
              <div class="col">Breed </br>${animal.breed}</div>
              <div class="col">Name  </br>${animal.name}</div>
              <div class="col">Sex   </br>${animal.sex}</div>
              <div class="col">Age   </br>${animal.age}</div>
  
              </div>
  
              <div class="row desc"> ${animal.description}</div>
              
              </span>
              `);
  
            } else {
              $(".temp").each(function (i, obj){
              if (obj.children.length < 2){
                $(this).append(`
                  <span id="for-adoption-section" class="col-sm-6 tt"> 
                  <img src="${animal.image}" class="for-adoption-img" alt="${animal.type}"/>
                  <div class="row">
                  <div class="col">Breed </br>${animal.breed}</div>
                  <div class="col">Name  </br>${animal.name}</div>
                  <div class="col">Sex   </br>${animal.sex}</div>
                  <div class="col">Age   </br>${animal.age}</div>
  
                  </div>
  
                  <div class="row desc"> ${animal.description}</div>
                  
                  
                  </span>
                  </div>
                  `);
                return false;
              }
            });
  
            }
  
          })
        }
        

      },
      error: function(xhr, textStatus, thrownError){

        $animals.append(`<div class="tt all-adopted">Server problems: <strong>${xhr.status} - ${xhr.statusText}</strong></div>`)
        console.log(xhr.statusText + "   " + xhr.status);
        console.log(textStatus);
        console.log(thrownError);
      }


    })

    $({
      

    })


});

