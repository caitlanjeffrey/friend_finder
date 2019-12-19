
// onclick 
$("#create").on("click", function(){
    // gather all the inputs

    console.log("CLICK")


    let newSurvey = {
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
    $.post("/api/friends", newSurvey, function(data){

    // get response (name, url)
    // open modal to show response of best match name and image
    }) 

})