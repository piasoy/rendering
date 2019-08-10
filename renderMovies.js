
function renderMovies(movies) {
    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(movies)}</code>
    //     </div>
    // `

   let movieArr=[];
    movies.map(function showMovies(movie){
        movieArr.push(
            `<div style="display:flex;flow-direction:row;justify-content:space-between;background-color:#F3F3F3;padding:20px;width:60%;margin:auto;margin-bottom:20px">
                <div><img src="${movie.poster}"/></div>
                <div style="background-color:white;padding:20px;border-radius:5%;width:50%">
                    <h2><b>${movie.title}</b></h2>
                    <p>${movie.year}</p>
                    <br/>
                    <h2>IMDB:</h2>
                    <p>${movie.imdbRating}/10</p>
                    <br/>
                    <h2>Rotten Tomatoes</h2>
                    <p>${(movie.rottenTomatoesRating)*100}</p>
                </div>
            </div>`
        )
    })
    return movieArr.join("");
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}