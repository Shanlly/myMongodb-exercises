module.exports = function(db) {
	// Which month had the most checkouts overall?
	db.collection("checkouts").aggregate([
		{
			$sortByCount: '$month'
		}
	],
		function(err, data){
			if(err){
				console.log(err);
				return;
			}
	console.log("Exercise 4:\n\tMonth " + data[0]._id +" had the most checkouts:" + data[0].count);
	});
};
