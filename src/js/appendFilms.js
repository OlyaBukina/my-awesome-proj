import { filmSectionEl } from './common/refs';
import { getGenres } from './common/getGenres';
import allGenres from './common/allGenres.json';

const posterUrl = 'https://image.tmdb.org/t/p/w500';
const noPosterUrl = 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';

export function appendFilms(films) {
  const filmsItem = films
    .map(({ title, poster_path, release_date, id, genre_ids }) => {
      return `
    <li class="film__item" data-id="${id}">
          <a href="#">
            <img src="${
              poster_path ? `${posterUrl}${poster_path}` : `${noPosterUrl}`
            } " alt="${
        poster_path ? `${title}` : `Poster not found`
      } " class="film__poster" />
            <p class="film__name">${title}</p>
            <p class="film__discription">
              <span class="film__type">${
                genre_ids.length ? getGenres(genre_ids, allGenres) : 'Unknown'
              }</span> |
              <span class="film__year">${
                release_date ? release_date.slice(0, 4) : `Unknown`
              }</span>
            </p></a
          >
        </li>`;
    })
    .join('');
  filmSectionEl.filmsList.innerHTML = filmsItem;
}
