
const friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
    
        // Receive user information
        var user = req.body;
    
        // parseInt for scores
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }
    
        // default friend match is the first friend but result will be whoever has the minimum difference in scores
        var bestFantasyFriend = 0;
        var bestMatchPointDifference = 20;
    
        // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
        //  whatever the difference is, add to the total difference
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                
                totalDifference += difference;
            }
    
            // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
            if (totalDifference < bestMatchPointDifference) {
                bestFantasyFriend = i;
                bestMatchPointDifference = totalDifference;
            }
        }
    
        // after finding match, add user to friend array
        friends.push(user);
        
        // send back to browser the best friend match
        res.json(friends[bestFantasyFriend]);
    });
};