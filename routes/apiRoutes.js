
const friends = require("../data/friends") 

console.log(friends)

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        //display JSON of all possible friends
        res.json(friends)
    })

    app.post("/api/friends", function(req, res){
        //incoming survey results
        // req.body or req.params
        // console.log(req)

        if ("..." ) {
            newSurvey.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
        console.log(req.body)

        // magic logic coparation the score with all the scores

        //res.json(bestMatch)
    })
}