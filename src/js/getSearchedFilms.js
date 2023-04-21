import fetchFilms from './fetchFilm';
import { appendFilms } from './appendFilms';
import { filmSectionEl } from './common/refs';
import { makePagination } from './common/pagination';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const searchUrl = 'https://api.themoviedb.org/3/search/movie';

export async function getSearchedFilms(pageNum) {
  try {
    const respons = await fetchFilms(searchUrl, pageNum);
    const totalPages = respons.data.total_pages;
    const films = respons.data.results;
    if (respons.data.total_results === 0) {
      filmSectionEl.filmsList.innerHTML = `<img src="../images/no-movies-found.jpg" alt="No movies found" class="" />`;
      return Notify.failure(
        'Search result not successful. Enter the correct movie name.'
      );
    }
    appendFilms(films);
    makePagination(totalPages, pageNum, getSearchedFilms);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    Notify.failure(error.message);
    throw error;
  }
}
