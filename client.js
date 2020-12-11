console.log(loadData())

const $moviesList = document.getElementById("moviesList");

const renderReview = review => `<li>${review.rating}</li>`

const renderMovie = movie => 
`<div>
    <br>
    <h2>${movie.name}</h2>
    <ul>${movie.reviews.map(renderReview).join('')}</ul>
</div>`

renderMovies();

function renderMovies() {
    $moviesList.innerHTML = loadData().movies.map(renderMovie).join('');
}

function loadData() {
    //JSON - JavaScript Object Notation
    const movies = [
    {
        "name" : "2Fast 2Furious",
        "genre" : "Drama",
        "reviews" : [
            {
                "rating" : 6,
                "like" : true,
                "user" : {
                    "name" : "Anthony Hall",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 5,
                "like" : true,
                "user" : {
                    "name" : "Blake Hall",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 5,
            },
            {
                "rating" : 4,
            },
            {
                "rating" : 5,
            },
            {
                "rating" : 3,
            }
        ]
    },
    {
        "name" : "Santa Clause",
        "genre" : "Drama",
        "reviews" : [
            {
                "rating" : 5,
                "like" : true,
                "user" : {
                    "name" : "Anthony Hall",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 3,
            },
            {
                "rating" : 5,
            }
        ]
    }
    ]
    return{
        "movies" : movies
    }
}