//https://developer.mixpanel.com/docs/nodejs
//https://github.com/mixpanel/mixpanel-node
var MP = require('mixpanel');
var mpToken = process.env.MIX_PANEL_TESTING_DEV_TOKEN;
var publicIp = require('public-ip');
// create an instance of the mixpanel client
var mixpanel = MP.init(mpToken, { protocol: 'http' });
var errorFunctionName = "None";


/**
 * Track an event for a user
 * 
 * @param {*} eventName name to give the event
 * @param {*} mixPanelUserId id of user to attach event to in mix panel
 * @param {*} eventPropertiesObj properties to attach event
 */
module.exports.TrackEventForUser = function (eventName, mixPanelUserId, eventPropertiesObj) {
    eventPropertiesObj.distinct_id = mixPanelUserId;
    trackEvent(eventName, eventPropertiesObj);
};

/**
 * Track an event with a specific timestamp (up to 5 days old; 
 * use mixpanel.import() for older events)
 *
 * @param {*} eventName name of event to track  
 * @param {*} eventDate date of tracking
 */
module.exports.TrackTimedEvent = function (eventName, eventDate) {
    trackEvent(eventName, undefined, eventDate);
};

/**
 * Track event withoud including properties or any other 
 * event data other than the event name
 * 
 * @param {*} eventName Name of event o to be tracked
 */
module.exports.TrackEventWithJustName = function (eventName) {
    trackEvent(eventName, undefined, undefined);
}

/**
 * Track multiple events with one call
 *
 * @param {*} eventsObjArray array of events to be tracked 
 * [
 *      { event: 'Name of Event 1', 
 *        properties: { 
 *          prop1: val1, 
 *          prop2: val2
 *              .
 *              .
 *              .
 *          propN: valN
 *          } 
 *      }, 
 *      { event: 'Name of Event 1', 
 *        properties: { 
 *          prop1: val1, 
 *          prop2: val2
 *              .
 *              .
 *              .
 *          propN: valN
 *          } 
 *      },
 * ]
 */
module.exports.TrackMultipleEvents = function (eventsObjArray) {
    errorFunctionName = "TrackMultipleEvents";
    if (isInvalid(eventsObjArray)) {
        var err = `eventsObjArray=${eventsObjArray} array cannot be null, empty or undefined`;
        errorCallBack(err);
    }

    mixpanel.track_batch(eventsObjArray, function (err) {
        errorCallBack(err);
    });
}

/**
 * Creates users or updates its properties if it exists 
 *
 * @param {*} userId id of user to create/update
 * @param {*} userProperties properties to add/uppate for user
 * @param {*} options mixpanel modifier options
 */
module.exports.CreateOrUpdateUser = async function (userId, userProperties, options) {
    var ipAddress = await publicIp.v4();
    var mixPanelOptions = {$ip : ipAddress };

    errorFunctionName = "CreateOrUpdateUser"
    if (!isInvalid(options)) {
        Object.assign(mixPanelOptions, options);
    }
    if (isInvalid(userId)) {
        var err = `userId=${userId} cannot be undefined`;
        await errorCallBack(err);
    }
    console.log(`Before calling people.set mixPanelOptions=${JSON.stringify(mixPanelOptions)}`);
    mixpanel.people.set(userId, {
        id: userId,
        $first_name: userProperties.firstName,
        $last_name: userProperties.lastName,
        $created: (new Date()).toISOString(),
        $email: userProperties.email,
        age: userProperties.age,
        gender: userProperties.gender,
        language: userProperties.language,
        membershipType: userProperties.membershipType,
        birthday: userProperties.birthday,
        weight: userProperties.weight,
    },
        mixPanelOptions,
        function (err) {
            errorCallBack(err);
        });
}

/**
 * Delete a user
 *
 * @param {*} userId id of user to be deleted
 * @param {*} options mixpanel modifiers. 
 * Example modifiers for this can be {$ignore_time: true, $ignore_alias: true}
 * this will delete a user in Mixpanel Engage without altering $last_seen or resolving aliases
 * pass option $ignore_time: true to prevent the $last_seen property from being updated
 * (useful if you subsequently re-import data for the same distinct ID)
 */
module.exports.DeleteUser = async function (userId, options) {
    if (isInvalid(userId)) {
        var err = `userId=${userId} cannot be undefined`;
        await errorCallBack(err);
    }
    if (!isInvalid(options)) {
        mixpanel.people.delete_user(userId, options, function (err) {
             errorCallBack(err);
        });
    }
    else {
        mixpanel.people.delete_user(userId, function (err) {
             errorCallBack(err);
        });
    }
}

/**
 * Add or update a singe property for a user
 *
 * @param {*} userId Id of user to add/update property
 * @param {*} propertyName name of property to add/update
 * @param {*} propertyValue value of property to add/uppate
 * @param {*} options mixpanel modifier options
 */
module.exports.AddOrUpdateUserProperty = function (userId, propertyName, propertyValue, options) {
    errorFunctionName = "AddOrUpdateUserProperty";
    addSingleUserPropertyHelper(userId, propertyName, propertyValue, options, false);
}

/**
 * Set a property on a user record, only if it does not yet exist. 
 * This will not overwrite previous people property value.
 *
 * @param {*} userId id of user
 * @param {*} propertyName name of property to set
 * @param {*} propertyValue value to set property to
 * @param {*} options mixpanel modifiers
 */
module.exports.AddUserPropertyOnce = function (userId, propertyName, propertyValue, options) {
    errorFunctionName = "AddUserPropertyOnce";
    addSingleUserPropertyHelper(userId, propertyName, propertyValue, options, true);
}

/**
 * Set properties on a user record, only if they do not yet exist. 
 * This will not overwrite previous people property values.
 *
 * @param {*} userId id of user
 * @param {*} userProperties key-value pair object of properties to override {prop1: value1, prop2: value2}
 * @param {*} options mixpanel modifiers
 */
module.exports.AddUserPropertiesOnce = async function (userId, userProperties, options, ) {
    errorFunctionName = "AddUserPropertiesOnce";
    var ipAddress = await publicIp.v4();
    var mixPanelModifiers = {$ip : ipAddress };
    if (!isInvalid(options)) {
        Object.assign(mixPanelModifiers, options);
    }
    if (isInvalid(userId) || isInvalid(userProperties)) {
        var err = `userId=${userId}, and userProperties=${userProperties} cannot be undefined, null or empty`;
       await errorCallBack(err);
    }

    mixpanel.people.set_once(userId, userProperties, mixPanelModifiers, function (err) {
       errorCallBack(err);
    });
}

/**
 * Append a value to a list, creating it if needed
 *
 * @param {*} userId id of user
 * @param {*} nameOfList list to append value to
 * @param {*} valueToAppend value to append
 * @param {*} options mixpanel modifiers 
 */
module.exports.AppendSingleValueToListForUser = async function (userId, nameOfList, valueToAppend, options) {
    errorFunctionName = "AppendSingleValueToListForUser";
    var ipAddress = await publicIp.v4();
    var mixPanelModifiers = {$ip : ipAddress };
    if (!isInvalid(options)) {
        Object.assign(mixPanelModifiers, options);
    }
    if (isInvalid(userId) || isInvalid(nameOfList) || isInvalid(valueToAppend)) {
        var err = `userId=${userId}, nameOfList=${nameOfList}, and valueToAppend=${valueToAppend} cannot be undefined`;
        await errorCallBack(err);
    }
    mixpanel.people.append(userId, nameOfList, valueToAppend, mixPanelModifiers, function (err) {
        errorCallBack(err);
    });
}

/**
 *  Append values to multiple lists creating them if needed
 *
 * @param {*} userId id of user 
 * @param {*} valuesToAppendObj key-value pair of lists and values to append 
 * Example: {list1: 'bob', list2: 123}  or {list1: ['bob', 'jose'], list2: [123, 456]}
 * @param {*} options mixpanel modifiers
 */
module.exports.AppendValuesToListsForUser =  async function (userId, valuesToAppendObj, options) {
    errorFunctionName = "AppendValuesToListsForUser";
    var ipAddress = await publicIp.v4();
    var mixPanelModifiers = {$ip : ipAddress };
    if (!isInvalid(options)) {
        Object.assign(mixPanelModifiers, options);
    }
    if (isInvalid(userId) || isInvalid(valuesToAppendObj)) {
        var err = `userId=${userId} and valueToAppend=${valuesToAppendObj} cannot be undefined`;
        await errorCallBack(err);
    }

    mixpanel.people.append(userId, valuesToAppendObj, mixPanelModifiers, function (err) {
        errorCallBack(err);
    });
}

/**
 * Merge multiple values to multiple lists for a user 
 *
 * @param {*} userId id of user
 * @param {*} valuesToMergeObj key-value pair object of lists and values to merge 
 *                             Example {list1: 'bob',list2: 123} or {list1: ['bob', 'billy'], list2: [456, 789]}
 * @param {*} options
 */
module.exports.MergeValuesToListsForUser = async function (userId, valuesToMergeObj, options) {
    var ipAddress = await publicIp.v4();
    var mixPanelModifiers = {$ip : ipAddress };
    if (!isInvalid(options)) {
        Object.assign(mixPanelModifiers, options);
    }
    if (isInvalid(userId) || isInvalid(valuesToMergeObj)) {
        var err = `userId=${userId} and valuesToMergeObj=${valuesToMergeObj} cannot be undefined`;
        await errorCallBack(err);
    }

    mixpanel.people.union(userId, valuesToMergeObj, mixPanelModifiers, function (err) {
        errorCallBack(err);
    });
}


/**
 *  Generic helper function to track events
 *
 * @param {*} eventName name of event
 * @param {*} eventPropertiesObj (optional) properties to attach to event, 
 * @param {*} eventDate (optional) event date for timed events
 */
var trackEvent = async function (eventName, eventPropertiesObj, eventDate) {
    // Mixpanel determines default geolocation data ($city, $region, mp_country_code) using the IP address on the incoming request
    errorFunctionName = "trackEvent";
    var ipAddress = await publicIp.v4();
    var eventProps = {$ip : ipAddress };
    if (isValidDate(eventDate)) {
        eventProps.time = eventDate;
    }
    if (!isInvalid(eventPropertiesObj)) {
        Object.assign(eventProps, eventPropertiesObj);
        console.log("eventProps inside trackEvent: ", eventPropertiesObj);
    }
    mixpanel.track(eventName, eventProps, function (err) {
        errorCallBack(err);
    });
}

/**
 *  Helper function to add/update single user properties
 *  
 * @param {*} userId Id of user
 * @param {*} propertyName name of property to be added/updated
 * @param {*} propertyValue value of property
 * @param {*} options mixpanel modifiers
 * @param {*} setOnce true if setting the property only once (can't override), false otherwise
 */
var addSingleUserPropertyHelper = async function (userId, propertyName, propertyValue, options, setOnce) {
    var ipAddress = await publicIp.v4();
    var mixPanelModifiers = {$ip : ipAddress };
    if (!isInvalid(options)) {
        Object.assign(mixPanelModifiers, options);
    }
    if (isInvalid(userId) || isInvalid(propertyName) || isInvalid(propertyValue)) {
        var err = `userId=${userId}, propertyValue=${propertyValue}, and propertyName=${propertyName} cannot be undefined`;
        await errorCallBack(err);
    }

    if (setOnce) {
        mixpanel.people.set_once(userId, propertyName, propertyValue, mixPanelModifiers, function (err) {
            errorCallBack(err);
        });
    }
    else {
        mixpanel.people.set(userId, propertyName, propertyValue, mixPanelModifiers, function (err) {
            errorCallBack(err);
        });
    }
}

/**
 * Helper function to validate a date
 * 
 * @param {*} date  date to validate
 * @returns
 */
function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
}

/**
 * Helper function to check values
 * are not empty, null or undefined
 *
 * @param {*} val value to check
 * @returns
 */
function isInvalid(val) {
    return (val === undefined || val === null || val.length <= 0) ? true : false
}

/**
 * Handles all errors for the mixpanel
 * api
 * 
 * @param {*} err
 */
var errorCallBack = function (err) {
    if (err) {
        console.log("On Function: " + errorFunctionName, err);
        throw err;
    }
}