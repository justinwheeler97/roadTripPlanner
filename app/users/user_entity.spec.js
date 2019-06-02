var test = require('tape');
var usersEntity = require('./user_entity.js');
var testingHelper = require('./user_testing_helper');

test('Test Create User Object With Valid Parameters', function (t) {
  var userParameters = testingHelper.GetUserParameters();
  let testUser = usersEntity.CreateUser(userParameters);
  t.notEqual(
    typeof testUser,
    'undefined',
    'Constructed User Return not Undefined'
  );
  t.notEqual(
    typeof testUser.username,
    'undefined',
    'Constructed User has an username'
  );
  t.notEqual(testUser.username, null, 'Constructed User username is not null');
  t.equal(
    testUser.username,
    userParameters.username,
    "Constructed User's username is equal to the given value."
  );
  t.equal(
    testUser.firstName,
    userParameters.firstName,
    "Constructed User's firstName is equal to the given value."
  );
  t.equal(
    testUser.lastName,
    userParameters.lastName,
    "Constructed User's lastName is equal to the given value."
  );
  t.equal(
    testUser.email,
    userParameters.email,
    "Constructed User's email is equal to the given value."
  );
  t.equal(
    testUser.home,
    userParameters.home,
    "Constructed User's home is equal to the given value."
  );
  t.equal(
    testUser.gender,
    userParameters.gender,
    "Constructed User's gender is equal to the given value."
  );
  t.equal(
    testUser.language,
    userParameters.language,
    "Constructed User's language is equal to the given value."
  );
  t.equal(
    testUser.mpg,
    userParameters.mpg,
    "Constructed User's mpg is equal to the given value."
  );
  t.equal(
    testUser.isPremium,
    userParameters.isPremium,
    "Constructed User's isPremium is equal to the given value."
  );
  t.equal(
    testUser.birthday,
    userParameters.birthday,
    "Constructed User's birthday is equal to the given value."
  );
  t.equal(
    testUser.country,
    userParameters.country,
    "Constructed User's country is equal to the given value."
  );
  t.equal(
    testUser.timezone,
    userParameters.timezone,
    "Constructed User's timezone is equal to the given value."
  );
  t.end();
});

test('Test Create User Object With Invalid Parameters', function (t) {
  t.throws(() => {
    usersEntity.CreateUser();
  }, 'CreateUser should throw with empty parameters');

  var badUserParameters = testingHelper.GetUserParameters();

  badUserParameters = testingHelper.GetUserParameters();
  badUserParameters.firstName = null;
  t.throws(() => {
    usersEntity.CreateUser(badUserParameters);
  }, 'Null firstName on User correctly throws error.');

  badUserParameters = testingHelper.GetUserParameters();
  badUserParameters.lastName = null;
  t.throws(() => {
    usersEntity.CreateUser(badUserParameters);
  }, 'Null lastName on User correctly throws error.');

  badUserParameters = testingHelper.GetUserParameters();
  badUserParameters.email = null;
  t.throws(() => {
    usersEntity.CreateUser(badUserParameters);
  }, 'Null email on User correctly throws error.');

  badUserParameters = testingHelper.GetUserParameters();
  badUserParameters.gender = null;
  t.throws(() => {
    usersEntity.CreateUser(badUserParameters);
  }, 'Null gender on user correctly throws error.');

  badUserParameters = testingHelper.GetUserParameters();
  badUserParameters.language = null;
  t.throws(() => {
    usersEntity.CreateUser(badUserParameters);
  }, 'Null language on user correctly throws error.');

  badUserParameters = testingHelper.GetUserParameters();
  badUserParameters.isPremium = null;
  t.throws(() => {
    usersEntity.CreateUser(badUserParameters);
  }, 'Null isPremium on user correctly throws error.');

  badUserParameters = testingHelper.GetUserParameters();
  badUserParameters.birthday = null;
  t.throws(() => {
    usersEntity.CreateUser(badUserParameters);
  }, 'Null birthday on user correctly throws error.');

  badUserParameters = testingHelper.GetUserParameters();
  badUserParameters.country = null;
  t.throws(() => {
    usersEntity.CreateUser(badUserParameters);
  }, 'Null country on user correctly throws error.');

  badUserParameters = testingHelper.GetUserParameters();
  badUserParameters.timezone = null;
  t.throws(() => {
    usersEntity.CreateUser(badUserParameters);
  }, 'Null timezone on user correctly throws error.');
  t.end();
});

test('Test Update User with new valid User Parameters', function (t) {
  let testUser = usersEntity.CreateUser(
    testingHelper.GetUserParameters()
  );

  let updatedParams = testingHelper.GetUpdateUserParameters();
  let updatedTestUser = usersEntity.UpdateUser(updatedParams);

  t.notEqual(
    testUser.username,
    updatedTestUser.username,
    'Updated User username is correctly different to the original User username'
  );
  t.notEqual(
    typeof updatedTestUser.username,
    'undefined',
    'Updated User username is correctly not undefined'
  );

  t.notEqual(
    typeof updatedTestUser.firstName,
    'undefined',
    'Updated User firstName is correctly not undefined.'
  );
  t.notEqual(
    testUser.firstName,
    updatedTestUser.firstName,
    'Updated User firstName is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.firstName,
    updatedParams.firstName,
    'Updated User firstName is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.lastName,
    'undefined',
    'Updated User lastName is correctly not undefined.'
  );
  t.equal(
    updatedTestUser.lastName,
    updatedParams.lastName,
    'Updated User lastName is correctly equal to the new given value.'
  );
  t.equal(
    updatedTestUser.lastName,
    updatedParams.lastName,
    'Updated User lastName is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.email,
    'undefined',
    'Updated User email is correctly not undefined.'
  );
  t.notEqual(
    testUser.email,
    updatedTestUser.email,
    'Updated User email is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.email,
    updatedParams.email,
    'Updated User email is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.home,
    'undefined',
    'Updated User home is correctly not undefined.'
  );
  t.notEqual(
    testUser.home,
    updatedTestUser.home,
    'Updated User home is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.home,
    updatedParams.home,
    'Updated User home is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.gender,
    'undefined',
    'Updated User gender is correctly not undefined.'
  );
  t.notEqual(
    testUser.gender,
    updatedTestUser.gender,
    'Updated User gender is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.gender,
    updatedParams.gender,
    'Updated User gender is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.language,
    'undefined',
    'Updated User language is correctly not undefined.'
  );
  t.notEqual(
    testUser.language,
    updatedTestUser.language,
    'Updated User language is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.language,
    updatedParams.language,
    'Updated User language is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.mpg,
    'undefined',
    'Updated User mpg is correctly not undefined.'
  );
  t.notEqual(
    testUser.mpg,
    updatedTestUser.mpg,
    'Updated User mpg is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.mpg,
    updatedParams.mpg,
    'Updated User mpg is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.isPremium,
    'undefined',
    'Updated User isPremium is correctly not undefined.'
  );
  t.notEqual(
    testUser.isPremium,
    updatedTestUser.isPremium,
    'Updated User isPremium is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.isPremium,
    updatedParams.isPremium,
    'Updated User isPremium is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.birthday,
    'undefined',
    'Updated User birthday is correctly not undefined.'
  );
  t.notEqual(
    testUser.birthday,
    updatedTestUser.birthday,
    'Updated User birthday is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.birthday,
    updatedParams.birthday,
    'Updated User birthday is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.country,
    'undefined',
    'Updated User country is correctly not undefined.'
  );
  t.notEqual(
    testUser.country,
    updatedTestUser.country,
    'Updated User country is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.country,
    updatedParams.country,
    'Updated User country is equal to the new given value.'
  );

  t.notEqual(
    typeof updatedTestUser.timezone,
    'undefined',
    'Updated User timezone is correctly not undefined.'
  );
  t.notEqual(
    testUser.timezone,
    updatedTestUser.timezone,
    'Updated User timezone is correctly different from original user value.'
  );
  t.equal(
    updatedTestUser.timezone,
    updatedParams.timezone,
    'Updated User timezone is equal to the new given value.'
  );
  t.end();
});

test('Test Update User with invalid User Parameters', function (t) {
  let testUser = usersEntity.CreateUser(
    testingHelper.GetUserParameters()
  );

  let nullUpdatedParams = testingHelper.GetNullUserParameters();
  nullUpdatedParams.id = testUser.id;
  t.throws(() => {
    usersEntity.UpdateUser(nullUpdatedParams);
  }, 'Updating User with Null User Parameter correctly throws an error.');

  t.end();
});
