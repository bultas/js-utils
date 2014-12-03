var reOrderArray = function(array, from, to) {
	reOrderedArray = [];
	
	for (var i = 0; i < array.length; i++) {
		reOrderedArray.push(array[i]);
	}

    reOrderedArray.splice(to, 0, reOrderedArray.splice(from, 1)[0]);

    return reOrderedArray;
};

module.exports = reOrderArray;