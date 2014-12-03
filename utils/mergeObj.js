
/** 
 * Change Object to another
 * @param {object} object1 - base object
 * @param {object} object2 - object to merge with object 1
 * @replace {boolean} replace - replace value from object2 if property is in both objects 
 */

var mergeObj = function(object1, object2, replace) {
    for (var key in object2) {
        if (object1[key] === undefined) {
            object1[key] = object2[key];
        } else if (replace) {
            object1[key] = object2[key];
        }
    }
};

module.exports = mergeObj;