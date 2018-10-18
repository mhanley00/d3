// ______________________________________________________________________________
// DEPENDENCIES - npm packages + API keys
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
require("dotenv").config();  
const express = require("express");
const serveStatic = require("serve-static")
const bodyParser = require("body-parser");
const path = require("path");
// STRAVA
const keys = require("./keys.js");
const clientID = (keys.clientID.id);
const clientSecret = (keys.clientSecret.id);
const mAccessToken = (keys.mAccessToken.id);
const athleteID = 17765042;

const request = require("request");



// ______________________________________________________________________________
// EXPRESS - server setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const app = express(); //we're making an express server
const PORT = process.env.PORT || 3000;

// Express app will handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//______________________________________________________________________________
//ROUTER - Connecting to .js data in routing folder
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.use(serveStatic("./public/", {"index": ["index.html"]}));


// ______________________________________________________________________________
//LISTENER - start server
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });



// ______________________________________________________________________________
//STRAVA - see https://developers.strava.com/docs/reference/#api-Activities-getActivityById
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = mAccessToken;

var api = new StravaApiV3.ActivitiesApi()

var opts = { 
  'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
  'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
  'page': 56, // {Integer} Page number.
  'perPage': 148 // {Integer} Number of items per page. Defaults to 30.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
    console.log('response: ' + response);
  }
};
api.getLoggedInAthleteActivities(opts, callback);