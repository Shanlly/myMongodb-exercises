module.exports = function(db) {
// Which users checked out any of the Lord of the Rings trilogy?
	var lotr = [];
	var userLotr= [];
//finding movie IDs
	db.collection('movies').aggregate([
		{
			$match:{title:{$regex :/The Lord of the Rings.+/}}
		}, 
		{
			$project:{ _id: true, title: true }
		},
		{
// look in checkouts db and find data matching from the movies db
			$lookup:{
				from: "checkouts",
				localField: "_id",
				foreignField: "movieId",
				as: "movieTitleData"
				}
		}
	],
		function (err, data){
			if(err){
				console.log(err);
				return;
			}
		console.log(`Exercise 2:\n\tThe LOTR movies were checked out by users ${data.movieTitleData.userId}`);
	});
 };
