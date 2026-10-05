const movies = [
    {
        title: "Avengers: Endgame",
        year: "2019",
        genre: "Action",
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
        title: "Interstellar",
        year: "2014",
        genre: "Sci-Fi",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        title: "Inception",
        year: "2010",
        genre: "Sci-Fi",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
        title: "The Dark Knight",
        year: "2008",
        genre: "Action",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    }
];

const movieContainer = document.getElementById("movieContainer");

function displayMovies(movieList) {
    movieContainer.innerHTML = "";

    movieList.forEach(movie => {
        const card = document.createElement("div");

        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year} • ${movie.genre}</p>
            </div>
        `;

        movieContainer.appendChild(card);
    });
}

displayMovies(movies);
