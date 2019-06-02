var testingHelper = require('./user_testing_helper');
var test = require('tape');

test('Test Addding Users to Store', function (t) {
  var userMemStore = require('./user_mem_store')();
  var userStore = require('./user_store')(userMemStore);
  var userInteractor = require('./user_interactor.js')(userStore);

  let testUser = userInteractor.AddUser(
    testingHelper.GetUserParameters()
  );
  t.notEqual(
    typeof testUser,
    'undefined',
    'Created User is correctly not undefined.'
  );
  let retrievedUser = userInteractor.GetUserById(testUser.id);
  t.equal(
    testUser,
    retrievedUser,
    'Retrieved User is correctly equal to original user.'
  );

  t.end();
});

test('Test Deleting Users from Store', function (t) {
  var userMemStore = require('./user_mem_store')();
  var userStore = require('./user_store')(userMemStore);
  var userInteractor = require('./user_interactor.js')(userStore);

  let testUser = userInteractor.AddUser(
    testingHelper.GetUserParameters()
  );
  userInteractor.RemoveUser(testUser.id);

  t.throws(() => {
    projectInteractor.GetUserById(testUser.id);
  }, 'Deleted User cannot be found as expected.');
  t.end();
});

test('Test Updating Users in Store with Valid Parameters', function (t) {
  var userMemStore = require('./user_mem_store')();
  var userStore = require('./user_store')(userMemStore);
  var userInteractor = require('./user_interactor.js')(userStore);

  let originalUser = userInteractor.AddUser(
    testingHelper.GetUserParameters()
  );
  let updatedParams = testingHelper.GetUpdateUserParameters();
  updatedParams.id = originalUser.id;
  let updatedUser = userInteractor.UpdateUser(updatedParams);
  t.equal(
    originalUser.id,
    updatedUser.id,
    'Updated User id is correctly equal to original  User id.'
  );
  t.notEqual(
    originalUser.username,
    updatedUser.username,
    'Updated User username is correctly equal to original  User username.'
  );
  t.notEqual(
    originalUser.firstName,
    updatedUser.firstName,
    'Updated User firstName is correctly not equal to original  User firstName.'
  );
  t.notEqual(
    originalUser.lastName,
    updatedUser.lastName,
    'Updated User lastName is correctly not equal to original User lastName.'
  );
  t.notEqual(
    originalUser.email,
    updatedUser.email,
    'Updated User email is correctly not equal to original  User email.'
  );
  t.notEqual(
    originalUser.home,
    updatedUser.home,
    'Updated User home is correctly not equal to original  User home.'
  );
  t.notEqual(
    originalUser.gender,
    updatedUser.gender,
    'Updated User gender is correctly not equal to original  User gender.'
  );
  t.notEqual(
    originalUser.language,
    updatedUser.language,
    'Updated User language is correctly not equal to original  User language.'
  );
  t.notEqual(
    originalUser.mpg,
    updatedUser.mpg,
    'Updated User mpg is correctly not equal to original  User mpg.'
  );
  t.notEqual(
    originalUser.isPremium,
    updatedUser.isPremium,
    'Updated User isPremium is correctly not equal to original  User isPremium.'
  );
  t.notEqual(
    originalUser.birthday,
    updatedUser.birthday,
    'Updated User birthday is correctly not equal to original  User birthday.'
  );
  t.notEqual(
    originalUser.country,
    updatedUser.country,
    'Updated User country is correctly not equal to original  User country.'
  );
  t.notEqual(
    originalUser.timezone,
    updatedUser.timezone,
    'Updated User timezone is correctly not equal to original  User timezone.'
  );
  t.end();
});

test('Test Updating Users in Store with Invalide Parameters', function (t) {
  var userMemStore = require('./user_mem_store')();
  var userStore = require('./user_store')(userMemStore);
  var userInteractor = require('./user_interactor.js')(userStore);

  let originalUser = userInteractor.AddUser(
    testingHelper.GetUserParameters()
  );
  let nullParams = testingHelper.GetNullUserParameters();
  nullParams.id = originalUser.id;
  t.throws(() => {
    userInteractor.UpdateUser(nullParams);
  }, 'Updating  User with null User Parameters correctly throws an error.');

  t.end();
});
