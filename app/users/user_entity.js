var uuid = require('uuid/v1');

exports.CreateUser = function (userParameters) {
  userParametersValidation(userParameters);
  return {
    username: userParameters.username,
    firstName: userParameters.firstName,
    lastName: userParameters.lastName,
    email: userParameters.email,
    home: userParameters.home,
    gender: userParameters.gender,
    language: userParameters.language,
    mpg: userParameters.mpg,
    isPremium: userParameters.isPremium,
    birthday: userParameters.birthday,
    country: userParameters.country,
    timezone: userParameters.timezone,
  };
};

exports.UpdateUser = function (userParameters) {
  userParametersValidation(userParameters);
  return {
    _id: userParameters._id,
    username: userParameters.username,
    firstName: userParameters.firstName,
    lastName: userParameters.lastName,
    email: userParameters.email,
    age: userParameters.age,
    home: userParameters.home,
    gender: userParameters.gender,
    language: userParameters.language,
    mpg: userParameters.mpg,
    isPremium: userParameters.isPremium,
    birthday: userParameters.birthday,
    country: userParameters.country,
    timezone: userParameters.timezone,
  };
}

userParametersValidation = function (userParameters) {
  if (typeof userParameters == 'undefined')
    throw 'User Parameters must be defined';
  if (userParameters.username == null)
    throw 'Username must be defined';
  if (userParameters.firstName == null)
    throw 'First Name must be defined';
  if (userParameters.lastName == null)
    throw 'Last Name must be defined';
  if (userParameters.email == null)
    throw 'Email must be defined';
  if (userParameters.home == null)
    throw 'Home must be defined';
  if (userParameters.gender == null)
    throw 'Gender must be defined';
  if (userParameters.language == null)
    throw 'Language must be defined';
  if (userParameters.mpg == null)
    throw 'Last Seen must be defined';
  if (userParameters.isPremium == null)
    throw 'Membership Type must be defined';
  if (userParameters.birthday == null)
    throw 'Birthday Grade must be defined';
  if (userParameters.language == null)
    throw 'Language must be defined';
  if (userParameters.country == null)
    throw 'Country must be defined';
  if (userParameters.timezone == null)
    throw 'Timezone must be defined';
}
