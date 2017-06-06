module.exports = function(db) {
	// What user(s) had the most checkouts?
	db.collection("checkouts").aggregate([
		{
			$sortByCount: '$userId'//sorting by the number of userID's
		}
	], 
		function(err, data){
			if(err){
				console.log(err);
				return;
			}
	console.log("Exercise 6:\n\tUser(s) "+ data[0]._id +" had the most checkouts:" + data[0].count);
	});
};
