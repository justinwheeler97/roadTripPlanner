const monk = require('monk');
const config = require('../config.json');
exports.Connect = function () {

  var dbUrl = 'mongodb://localhost:27017/roadTripPlanner';
  let db;
  db = monk(dbUrl);
  db.then(() => console.log('Connected to MongoDB Atlas...')),
    db.catch(err => console.error('Could not connect to MongoDB Atlas...', err));

  if (config.dev) {
    exports.users = db.get('testUsers');
  }
  else { //Prod
    exports.users = db.get('Users');

  }



}
