module.exports = function (app) {
	// dependencies
	var path = require('path');
	var friends = require('../data/friends.js');

	// ================================================================
	// api-routes
	// ================================================================

	// 
	app.get('/api/friends', function (request, response) {
		
		response.json(friends);
	});

	app.post('/api/friends', function (req, response) {
		
		var totalDifferences = [];

		// loop over total friendlist array
    	for (var i =0; i < friends.length; i++){
    		var match = friends[i].scores;

    		// loop over individual scores array of each friend and compare
    		for (var j = 0; j < match.length; j++) {
    			var difference = 0;
    			// difference will be a total of absolute values of differences between user and friend[i]
    			difference += Math.abs(req.body.scores[j] - match[j]);
    		}
    		// pushes the above total difference score for this friend evaluation to the totalDifferences array
        	totalDifferences.push(difference);
        };

        // find lowest value in totalDifferences array and return lowest index. that's our match
        var index = 0;
		var value = totalDifferences[0];

		function lowestIndex (array) {
			for (var i = 1; i < array.length; i++) {
	  			if (array[i] < value) {
	    			value = array[i];
	    			index = i;
	  			}
			};
			return index;
		};

		var myMatch = friends[lowestIndex(totalDifferences)];

		response.send(myMatch);
	});
};