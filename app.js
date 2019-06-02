
const users = require('./app/users/user_routes');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));// To manage command line arguments passed when app is started
const express = require('express');
const app = express();
const db = require('./util/db');
var config = require('./config.json');


// Get environment and set up parameters accordingly
config.dev = args.dev
fs.writeFileSync('./config.json', JSON.stringify(config, null, 2), function (err) {
  if (err)
    console.log(err);
});

var port;
if (config.dev) {
  port = config.devPort;
}
else {
  port = config.port;
}

//Express Middlewares
app.use(express.json());

//conenct to mongodb
db.Connect();

// Serve angular app from node
var distDir = __dirname + "/dist/TestingManagementSystem/";
app.use(express.static(distDir));

//Routes
app.use('/api/users', users);

//mixPanelClient.TrackEvent("TestEvent IGNORE", issue);
app.listen(port, () => console.log(`Listening on port ${port}...`));
