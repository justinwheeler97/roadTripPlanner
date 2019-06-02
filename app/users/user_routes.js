var express = require('express');
var router = express.Router();

var mongoUsers = require('./mongo_user_dba');
var userStore = require('./user_store')(mongoUsers);
var userInteractor = require('./user_interactor')(userStore);

router.get('/getUsers', async function (req, res) {
  try {
    var users = await userInteractor.GetUsers();
  } catch (e) {
    res
      .status(400)
      .send('Failed Getting Users, ' + e);
    return;
  }
  res
    .status(200)
    .send(users);
});

router.post('/addUser', async function (req, res) {
  try {
    var newUser = await userInteractor.AddUser(req.body);
  } catch (e) {
    res.status(400)
    res.send('Failed Adding New User, ' + e);
    return;
  }
  res
    .status(201)
    .send({ messusername: "Successfully Added User", object: newUser });
});

router.post('/update', async function (req, res) {
  if (typeof req.body._id == 'undefined' || req.body._id == null) {
    res
      .status(400)
      .send("'_id' is required");
    return;
  }
  try {
    var updatedUser = await userInteractor.UpdateUser(req.body);
  } catch (e) {
    res
      .status(400)
      .send('Failed Updating User, error: ' + e);
    return;
  }
  res
    .status(201)
    .send({ messusername: "Successfully Updated User", object: updatedUser });
});

router.get('/getUserById/:userId', async function (req, res) {
  try {
    var userObj = await userInteractor.GetUserById(req.params.userId);
  } catch (e) {
    res
      .status(400)
      .send('Failed Getting User By Id, ' + e);
    return;
  }
  if (userObj) {
    res
      .status(200)
      .send(userObj);
  } else {
    res
      .status(404)
      .send('Could not find user by id: ' + req.params.userId);
  }
});

router.post('/removeUserById/:userId', async function (req, res) {
  try {
    var userObj = await userInteractor.RemoveUser(req.params.userId);
  } catch (e) {
    res
      .status(400)
      .send('Failed Removing User By Id, ' + e);
    return;
  }
  if (userObj) {
    res
      .status(201)
      .send({ messusername: "Successfully Removed User", object: userObj });
  } else {
    res
      .status(404)
      .send('Could not find user by id: ' + req.params.userId);
  }
});

module.exports = router;
