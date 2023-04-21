import axios from 'axios';
import API_KEY from './common/api-key';

import { appendFilms } from './appendFilms';
import { filmSectionEl } from './common/refs';
import { makePagination } from './common/pagination';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const getTrendesUrl = `https://api.themoviedb.org/3/trending/movie/day?`;

export async function getTrendingFilms(pageNum) {
  try {
    const respons = await axios(
      `${getTrendesUrl}api_key=${API_KEY}&page=${pageNum}`
    );
    const totalPages = respons.data.total_pages;
    const films = respons.data.results;

    appendFilms(films);
    makePagination(totalPages, pageNum, getTrendingFilms);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    Notify.failure(error.message);
    throw error;
  }
}
getTrendingFilms(1);
