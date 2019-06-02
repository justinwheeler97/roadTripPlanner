module.exports = function () {
  var store = {};
  var userMemStore = {};
  userMemStore.GetUsers = function () {
    var output = [];
    for (var id in store) {
      output.push(store[id]);
    }
    return output;
  };

  userMemStore.AddUser = function (userObj) {
    store[userObj.id] = Object.assign({}, userObj);
    return store[userObj.id];
  };

  userMemStore.GetUserById = function (userId) {
    if (typeof store[userId] == 'undefined') {
      throw 'Could not find user by id: ' + userId;
    }
    return store[userId];
  };

  userMemStore.UpdateUser = function (updatedUser) {
    store[updatedUser.id] = updatedUser;
    return store[updatedUser.id];
  };

  userMemStore.RemoveUser = function (userId) {
    delete store[userId];
  };

  return userMemStore;
};
