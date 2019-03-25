var movies = [

    {
        title: "In Bruges",
        rating: "5 stars",
        hasWatched: "Not"
    },
    {
        title: "Frozen",
        rating: "4 stars",
        hasWatched: "Watched"
    }


]

for (var i = 0; i < movies.length; i++) {
    console.log(movies[i].title + " " + "- " + movies[i].rating + " " + movies[i].hasWatched);
}