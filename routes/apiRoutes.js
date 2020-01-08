
const friends = require("../data/friends") 

console.log(friends)

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        //display JSON of all possible friends
        res.json(friends)
    })

    app.post("/api/friends", function(req, res){

        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        }

        let userData = req.body
        let userScores = userData.scores
        let userName = userData.name
        let userPhoto = userData.photo

        var totalDifference = 0

        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            //loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
            for (var j = 0; j < 10; j++) {
                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend. 
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData)

        res.json(bestMatch)
        // var user = req.body

        // for (var i = 0; i < user.scores.length; i++) {
        //     user.scores[i] = parseInt(user.scores[i])
        // }

        // var bestFriend = 0
        // var minDifference = 40

        // for (var i = 0; i < friends.length; i ++) {
        //     var totalDifference = 0
        //     for (var j = 0; j < friends[i].scores.length; j++) {
        //         var difference = Math.abs(user.scores[j] - friends[i].scores[j])
        //         totalDifference += difference
        //     }

        //     if (totalDifference < minDifference) {
        //         bestFriend = i
        //         minDifference = totalDifference
        //     }
        // }

        // friends.push(user)

        // res.json(friends[bestFriend])

        // if ("..." ) {
        //     newSurvey.push(req.body);
        //     res.json(true);
        // } else {
        //     waitListData.push(req.body);
        //     res.json(false);
        // }
        // console.log(req.body)

        // magic logic coparation the score with all the scores

        //res.json(bestMatch)
    })
}
