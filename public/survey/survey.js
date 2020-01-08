
// onclick 
$("#submit-results").on("click", function(event){
    event.preventDefault()
    console.log("CLICK")

    let newFriend = {
        "name":"Isabel",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
                5,
                1,
                1,
                4,
                1,
                2,
                2,
                3,
                4,
                1
        ]
    }

    // call apiRoutes  AJAX
    $.post("/api/friends", newFriend, function(data){

    // get response (name, url)
    // open modal to show response of best match name and image
    }) 

})





    // // Chosen CSS
    // var config = {
    //     ".chosen-select": {},
    //     ".chosen-select-deselect": {
    //       allow_single_deselect: true
    //     },
    //     ".chosen-select-no-single": {
    //       disable_search_threshold: 10
    //     },
    //     ".chosen-select-no-results": {
    //       no_results_text: "Oops, nothing found!"
    //     },
    //     ".chosen-select-width": {
    //       width: "95%"
    //     }
    // };

    for (var selector in config) {
        $(selector).chosen(config[selector]);
        }

        // Capture the form inputs
        $("#submit").on("click", function(event) {
        event.preventDefault();

        // Form validation
        function validateForm() {
            var isValid = true;
            $(".form-control").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        $(".chosen-select").each(function() {

            if ($(this).val() === "") {
                isValid = false;
            }
        });
            return isValid;
        }

        // If all required fields are filled
        if (validateForm()) {
          // Create an object for the user"s data
        var userData = {
            name: $("#inputName").val().trim(),
            photo: $("#inputPhoto").val().trim(),
            scores: [
                $("#question-1").val(),
                $("#question-2").val(),
                $("#question-3").val(),
                $("#question-4").val(),
                $("#question-5").val(),
                $("#question-6").val(),
                $("#question-7").val(),
                $("#question-8").val(),
                $("#question-9").val(),
                $("#question-10").val()
            ]
        };

          // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function(data) {

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);

            // Show the modal with the best match
            $("#results-modal").modal("toggle");

        });
        } else {
            alert("Please fill out all fields before submitting!");
        }
    });
    