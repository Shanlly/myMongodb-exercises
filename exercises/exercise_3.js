module.exports = function(db) {
	//What is the title of the movie(s) that was the most checked out?
// pulling info from checkouts and sorting
	db.collection("checkouts").aggregate([
		{
			$sortByCount: "$movieId"
		},
		{
// pulling data from movies and get info
			$lookup : {
				from: "movies",
				localField: "_id",
				foreignField: "movieId",
				as: "movieTitleData"
				}
		}
	],
	function(err, data){
		if(err){
			console.log(err);
			return;
		}
	console.log (`Exercise 3:\n\tThe movie ${data[0].movieTitleData[0].title} was checked out ${data[0].count} times.`);
	});
};

