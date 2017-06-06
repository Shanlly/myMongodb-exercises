module.exports = function(db) {
//	Which movie(s) had the most checkouts in April?
	db.collection("checkouts").aggregate([
		{
			$match:{ month: "apr"}
		},
		{
			$sortByCount: "$movieId"
		},
		{
// look in checkouts db and find data matching from the movies db
			$lookup:{
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
		console.log(`Exercise 5:\n\tMovie ${data[0].movieTitleData[0].title} had the most checkouts in April: ${data[0].count}`);
	});
};
