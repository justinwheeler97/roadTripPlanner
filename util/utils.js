
/**
 * Flatten an object. 
 *
 * Example: 
 * { a: 1 b: { c: 2  } } after Flatten ==>  { a: 1 c: 2 } 
 * 
 * @param {*} obj object to be flatten
 * @returns flattened object
 */
module.exports.flatten = function (obj) {
    return Object.keys(obj).reduce((acc, current) => {
      const _key = `${current}`;
      const currentValue = obj[current];
      if (Array.isArray(currentValue) || Object(currentValue) === currentValue) {
        Object.assign(acc, flatten(currentValue));
      } else {
        acc[_key] = currentValue;
      }
      return acc;
    }, {});
  };