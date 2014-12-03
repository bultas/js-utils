
/** 
 * Replace Object to another object
 * @param {object} object1 - object to change
 * @param {object} object2 - object to replace object1
 */


var replaceObj = function(object1, object2) {
    for (var i in object1) {
        delete(object1[i]);
    }
    for (var y in object2) {
        object1[y] = object2[y];
    }
};

module.exports = replaceObj;