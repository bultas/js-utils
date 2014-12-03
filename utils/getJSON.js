
/** 
 * Ajax GET request to get JSON file and return JS object
 * @param {string} path is path to JSON file ... example: "/file.json"
 * @return {object} JSON data converted to JS object
 */

var get = require("utils/get");


var getJSON = function(JSONpath) {
    var string = get(JSONpath);
    return JSON.parse(string);
};

module.exports = getJSON;

