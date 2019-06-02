var test = require('tape');
var testingHelper = require('./user_testing_helper');

var userMemStore = require('./user_mem_store')();
var userStore = require('./user_store')(userMemStore);
var userEntity = require('./user_entity');

test('Test User Store', function (t) {
  t.equal(userStore.GetUsers().length, 0, 'User Store length is correctly 0 users when empty.');

  let testUser = userEntity.CreateUser(testingHelper.GetUserParameters());
  let addedUser = userStore.AddUser(testUser);
  t.deepEqual(testUser, addedUser, 'Adding a user correctly returns that user.');
  t.notEqual(userStore.GetUsers().length, 0, 'User Store length is correctly not 0 after adding a user.');
  userStore.RemoveUser(testUser.id);
  t.equal(userStore.GetUsers().length, 0, 'User Store length is correctly 0 after removing the user.');
  t.doesNotThrow(() => { userStore.AddUser(testUser); }, 'Adding a valid user correctly does not throw an error.');
  t.doesNotThrow(() => { userStore.GetUserById(testUser.id); }, 'Retrieving a valid user correctly does not throw and error.');
  let retrievedUser = userStore.GetUserById(testUser.id);
  t.deepEqual(testUser, retrievedUser, 'Retrieved item is correctly the same as the original user.');
  t.throws(() => { userStore.GetUserById('5'); }, 'Correctly throws an error with non existent userid');
  updatedParams = testingHelper.GetUpdateUserParameters();
  updatedParams.id = testUser.id;
  updatedTestUser = userEntity.UpdateUser(updatedParams);
  userStore.UpdateUser(updatedTestUser);
  t.equal(updatedTestUser, userStore.GetUserById(testUser.id), 'Updated User is correctly saved in the store.');
  t.notEqual(testUser, userStore.GetUserById(testUser.id), 'Original User is correctly not the same as user in store.');

  t.end();
});
