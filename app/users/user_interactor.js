var userEntity = require('./user_entity.js');

module.exports = function (userStore) {
  var userInteractor = {};
  userInteractor.GetUsers = function () {
    return userStore.GetUsers();
  };

  userInteractor.AddUser = function (userParameters) {
    let userObj = userEntity.CreateUser(userParameters);
    return userStore.AddUser(userObj);
  };

  userInteractor.GetUserById = function (userId) {
    return userStore.GetUserById(userId);
  };

  userInteractor.UpdateUser = function (newUserParameters) {
    let newUser = userEntity.UpdateUser(newUserParameters);
    return userStore.UpdateUser(newUser);
  };

  userInteractor.RemoveUser = function (userId) {
    return userStore.RemoveUser(userId);
  }

  return userInteractor;
};
