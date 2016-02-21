$(document).ready(function(){
    $("#submit-btn").click(function(event){
        event.preventDefault();
            /*Stored trimmed value of input text in variable city*/
    var city = $("#city-type").val().toLowerCase();
        /* Using conditional statement to check if input value matches either of these 3 names */
    if (city.trim() == "new york"||city.trim() == "new york city"||city.trim() == "nyc"){
                /* Changing the background attribute of body based on user input */
      $("body").attr("style", "background: url('images/nyc.jpg')");
    }
        /* Using conditional statement to check if input value matches either of these 3 names */
    if (city.trim() == "san francisco"||city.trim() == "sf"||city.trim() == "bay area"){
                /* Changing the background attribute of body based on user input */
      $("body").attr("style", "background: url('images/sf.jpg')");
    }
        /* Using conditional statement to check if input value matches either of these 3 names */
    if (city.trim() == "los angeles"||city.trim() == "la"||city.trim() == "lax"){
                /* Changing the background attribute of body based on user input */
      $("body").attr("style", "background: url('images/la.jpg')");
    }
        /* Using conditional statement to check if input value matches either of these 2 names */
    if (city.trim() == "austin"||city.trim() == "atx"){
                /* Changing the background attribute of body based on user input */
      $("body").attr("style", "background: url('images/austin.jpg')");
    }
        /* Using conditional statement to check if input value matches either of these 2 names */
    if (city.trim() == "sydney"||city.trim() == "syd"){
                /* Changing the background attribute of body based on user input */
      $("body").attr("style", "background: url('images/sydney.jpg')");
    }
            /* Resetting input to null*/
          $('#city-type').val('');
  });
});
