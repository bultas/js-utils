
/** 
 * Ajax GET request
 * @param {string} path is path to file to get ... example: "/file.json"
 * @return {string} responseText
 */

var get = function(path) {
    var request = new XMLHttpRequest();
    request.open('GET', path, false);
    request.send(null);

    if (request.status === 200) {
        return request.responseText;
    } else {
        return null;
    }
};

module.exports = get;

