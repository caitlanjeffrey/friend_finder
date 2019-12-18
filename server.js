var express = require("express")
var path = require("path")

var app = express()

// port listener
var PORT = process.env.PORT || 8080

// setting up express server
app.use(express.urlencoded({extended: true}))
app.use(express.json())

require("./app/routes/apiRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});