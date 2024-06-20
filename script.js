const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2a53d8d85a6f0ca1d9a74cfddd19074&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=c2a53d8d85a6f0ca1d9a74cfddd19074&query=";  

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovies(APILINK) {
  fetch(APILINK)
    .then(res => res.json())
    .then(function(data) {
      console.log(data.results);
      data.results.forEach(element => {
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');

        const title = document.createElement('h3');
        title.setAttribute('id', 'title');

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;

        div_card.appendChild(image);
        div_card.appendChild(title);

        main.appendChild(div_card);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});

// Initial call to load popular movies
returnMovies(APILINK);
