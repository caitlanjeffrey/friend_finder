const express = require("express")
const path = require("path")

const app = express()

// port listener
const port = process.env.port || 8080

// setting up express server
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// requiring paths
require("./routes/apiRoutes.js")(app)
require("./routes/htmlRoutes.js")(app)

app.listen(port, function() {
    console.log("App listening on PORT: " + port);
});