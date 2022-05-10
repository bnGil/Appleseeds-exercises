const main = document.querySelector("main");

async function fetchMovie(name) {
  try {
    const url = `http://www.omdbapi.com/?apikey=2f2da31d&t=${name}`;
    const movie = await fetch(url);
    const dataMovie = await movie.json();
    if (dataMovie.Response === "False") {
      throw new Error(dataMovie.Error);
    } else {
      return dataMovie;
    }
  } catch (err) {
    printTheError(err);
  }
}

async function searchHandler(movieName) {
  const movieObj = await fetchMovie(movieName);
  drawCard(movieObj);
}

function printTheError(err) {}

function drawCard(movieData) {}

const inputMovie = () => {
  const search = document.getElementById("search");
  const searchBtn = document.getElementById("btn");

  search.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let movieName = e.target.value;
      e.target.value = "";
      searchHandler(movieName);
    }
  });
  searchBtn.addEventListener("click", function (e) {
    searchHandler(search.value);
  });
};

inputMovie();
