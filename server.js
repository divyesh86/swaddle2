const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const passport = require('passport');
const PORT = process.env.PORT || 3001;
require('./server/config/passport')(passport); // pass passport for configuration

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/swaddle",
    {
        useMongoClient: true
    }
);




// set up our express application
app.use(express.logger('dev')); // log every request to the console
app.use(express.cookieParser()); // read cookies (needed for auth)
app.use(express.bodyParser()); // get information from html forms


// required for passport
app.use(express.session({ secret: 'thisisasecret' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

const routes = require('./server/api/routes.js');
app.use('/api', routes);

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport);


// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
