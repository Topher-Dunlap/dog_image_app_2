// Best practice
(function (g) {
'use strict';
    //Variables
    let userInput = 0;
  
    //Functions
  
    $("form").submit((event) => {
      event.preventDefault();
      userInput = $("input").val();
      getDogImage();
    });
  
    function getDogImage() {
      fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
        .then((response) => response.json())
        .then((responseJson) => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    }
  
    function displayResults(responseJson) {
      let dogImageString = JSON.stringify(responseJson.message);
      let dogImages = "";
      //replace the existing image with the new one
      dogImages += `<img src=${dogImageString} class="results-img">`;
      //display the results section
      debugger;
      $("#show").html(dogImages);
      $(".results").removeClass("hidden");
    }
  
    // jQuery iffe
    // immediately invoked function executable
    $(function () {
      console.log("App loaded! Waiting for submit!");
      // watchForm();
    });
  
    g.displayResults = displayResults;
  })(globalThis);
  