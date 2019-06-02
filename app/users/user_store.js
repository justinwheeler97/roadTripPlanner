module.exports = function (userStoreImpl) {
  userStore = {};

  userStore.AddUser = function (userObj) {
    return userStoreImpl.AddUser(userObj);
  };

  userStore.GetUsers = function () {
    return userStoreImpl.GetUsers();
  };

  userStore.GetUserById = function (userId) {
    return userStoreImpl.GetUserById(userId);
  };

  userStore.UpdateUser = function (userId, newUser) {
    return userStoreImpl.UpdateUser(userId, newUser);
  };

  userStore.RemoveUser = function (userId) {
    return userStoreImpl.RemoveUser(userId);
  };

  return userStore;
};
