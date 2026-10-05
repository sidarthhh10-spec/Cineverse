/* =========================
   MOVIE DATA
========================= */

const movies = [

    {
        title: "Avengers: Endgame",
        year: "2019",
        genre: "Action • Adventure",
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description:
            "The Avengers come together for one final mission to undo the devastating events that changed the universe."
    },

    {
        title: "Interstellar",
        year: "2014",
        genre: "Sci-Fi • Adventure",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description:
            "A group of explorers travel through a wormhole in space in search of a new home for humanity."
    },

    {
        title: "Inception",
        year: "2010",
        genre: "Sci-Fi • Thriller",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description:
            "A skilled team enters people's dreams to perform an unusual kind of mission."
    },

    {
        title: "The Dark Knight",
        year: "2008",
        genre: "Action • Crime",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description:
            "Batman faces a dangerous criminal who pushes Gotham City into chaos."
    }

];


/* =========================
   ELEMENTS
========================= */

const movieContainer =
    document.getElementById("movieContainer");

const searchInput =
    document.getElementById("searchInput");

const movieModal =
    document.getElementById("movieModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalInfo =
    document.getElementById("modalInfo");

const modalDescription =
    document.getElementById("modalDescription");

const closeModal =
    document.getElementById("closeModal");

const watchButton =
    document.getElementById("watchButton");


/* =========================
   DISPLAY MOVIES
========================= */

function displayMovies(movieList) {

    movieContainer.innerHTML = "";

    if (movieList.length === 0) {

        movieContainer.innerHTML = `
            <p class="no-results">
                No movies found.
            </p>
        `;

        return;
    }


    movieList.forEach(movie => {

        const card =
            document.createElement("div");

        card.className = "movie-card";


        card.innerHTML = `

            <img
                src="${movie.image}"
                alt="${movie.title}"
            >

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>
                    ${movie.year} • ${movie.genre}
                </p>

            </div>

        `;


        card.addEventListener("click", () => {

            openMovie(movie);

        });


        movieContainer.appendChild(card);

    });

}


/* =========================
   OPEN MOVIE
========================= */

function openMovie(movie) {

    modalImage.src = movie.image;

    modalImage.alt = movie.title;

    modalTitle.textContent =
        movie.title;

    modalInfo.textContent =
        `${movie.year} • ${movie.genre}`;

    modalDescription.textContent =
        movie.description;


    movieModal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE MOVIE
========================= */

function closeMovie() {

    movieModal.style.display = "none";

    document.body.style.overflow = "auto";
}


closeModal.addEventListener(
    "click",
    closeMovie
);


movieModal.addEventListener(
    "click",
    (event) => {

        if (event.target === movieModal) {

            closeMovie();

        }

    }
);


/* =========================
   SEARCH
========================= */

searchInput.addEventListener(
    "input",
    () => {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();


        const filteredMovies =
            movies.filter(movie =>

                movie.title
                    .toLowerCase()
                    .includes(searchText)

            );


        displayMovies(filteredMovies);

    }
);


/* =========================
   EXPLORE BUTTON
========================= */

function scrollToMovies() {

    document
        .getElementById("movies")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   WATCH BUTTON
========================= */

watchButton.addEventListener(
    "click",
    () => {

        alert(
            "Trailer feature will be added soon!"
        );

    }
);


/* =========================
   INITIAL LOAD
========================= */

displayMovies(movies);
