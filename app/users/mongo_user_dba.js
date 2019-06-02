var db = require('../../util/db');

exports.GetUsers = function () {
  return db.users
    .find()
    .then(docs => docs)
    .catch();
};

exports.AddUser = function (userObj) {
  return db.users
    .insert(userObj)
    .then(doc => doc)
    .catch();
};

exports.GetUserById = function (userId) {
  return db.users
    .find({ _id: userId })
    .then(docs => docs[0])
    .catch();
};

exports.RemoveUser = function (userId) {
  return db.users
    .remove({ _id: userId })
    .catch();
};

exports.UpdateUser = function (userObj) {
  return db.users
    .findOneAndUpdate({ _id: userObj._id }, { $set: userObj })
    .then(docs => { return docs; })
    .catch();
}
