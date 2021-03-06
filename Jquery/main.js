"use strict"

$(document).ready(function(){

  const $animals = $("#animals-listing");
  const $options = $("#animal-options");
  let options = ["Dog", "Cat", "Lizard"]
  let clickedOptions = [];
  let animalList;

    //login button for admin to post, delete and put on "on going" on the animals

    $.ajax({
      type: "GET",
      url: "http://localhost:5000/Animals",
      success: function(animals){

        //A arrow, etc, to read all about that animal. Before arrow show first 2 sentc and 1 faded

        if (!$.trim(animals)){
          $animals.append(`<div class="tt all-adopted"><strong>All animals are adopted</strong></div>`);

        } else {
          animalList = animals;
          postData(animals);

          $.each(options, function(i, option){
            $options.append(`
            <span>${option}</span>
            `)

          })

          $("#animal-options").children().each(function(i, obj){
            $(this).click(function (){
              if ( $(this).attr("class") == undefined){
                $(this).attr("class", "options-clicked");
                clickedOptions.push($(this).text());
                postData(animalList);

              } else {
                let index = clickedOptions.indexOf($(this).text());
                clickedOptions.splice(index, 1);
                $(this).removeAttr("class", "options-clicked");
                postData(animalList);
              }
              
            })

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

    //Prevents marking text when clicking on the animal-options
    $("#animal-options").mousedown(function(e){ e.preventDefault(); });
  
    function postData(dataset){
      let postToWebsite = [];

      if (clickedOptions.length != 0){
        for (let i = 0; i < dataset.length; i++){
          for (let j = 0; j < clickedOptions.length; j++){
            if (dataset[i].type == clickedOptions[j]) {
              // console.log("works")
              postToWebsite.push(dataset[i]);

            }

            
          }
            console.log(postToWebsite)
            $animals.empty();
          }
        } else {
          $animals.empty();
          postToWebsite = dataset;
        }

        

      $.each(postToWebsite, function(i, animal){
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
          <div class="row desc"> Contact information:   ${animal.contact}</div>
          
          </span>
          `);

        } 
      
        else {

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
              <div class="row desc"> Contact information:   ${animal.contact}</div>
              
              
              </span>
              </div>
              `);
            return false;
          }
        });

        }

      })
    }
});


