
const validateForm = function() {
    let isValid = true

    $(".form-control").each(function() {
        if ($(this).val() === "") {
            isValid = false
            alert("Please fill out all fields before submitting!")
        } else {
            return isValid
        }
    })
}

// Capture the form inputs
$("#submit-results").on("click", function(event) {
    console.log("hi")
    event.preventDefault();

    // Create an object for the user"s data
    let newUser = {
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
    }
    
    validateForm()

    if(isValid) {
        $.post("api/friends", newUser, function(data) {
            console.log(data)
            $("#match-name").text(data.name)
            $("#match-img").attr("src", data.photo)

            $("#result-modal").modal("toggle")
        })
    } else {
        alert("Please fill out all fields before submitting!")
    }
});