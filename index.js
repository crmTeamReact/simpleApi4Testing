let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

// Import routes
let apiRoutes = require("./api-routes")

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://AlexisCorbacho:12345asdfg@cluster0-vcq5j.mongodb.net/albums?retryWrites=true')

var db = mongoose.connection.once('open', function () {
    console.log("successfully connected to mongodb")
}).on('error', function (error) {
    console.log("connection error:", error)
})
// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('crmMay!!'));

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});