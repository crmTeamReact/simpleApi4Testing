// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
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
// mongoose.connect(
//     'mongodb+srv://AlexisCorbacho:12345asdfg**@cluster0-vcq5j.mongodb.net/test?retryWrites=true', {
//         useMongoClient: true
//     });
//mongoose.connect('mongodb://localhost/crmMay');

var db = mongoose.connection.once('open', function () {
    console.log("successfully connected to mongodb")
}).on('error', function (error) {
    console.log("connection error:", error)
})
// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});