const express = require("express")
const app = express()

const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")


// port listener
const PORT = process.env.PORT || 8080

// setting up express server
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//allows sending of additional files through the 'public folders'
app.use(express.static("public"))

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
}); 