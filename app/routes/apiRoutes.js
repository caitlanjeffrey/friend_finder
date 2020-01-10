
const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        friends.push(req.body)
        return res.json(friends[Math.floor(Math.random() * friends.length)])
    })
}