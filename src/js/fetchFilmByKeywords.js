import axios from 'axios';
import API_KEY from './common/api-key';
import { queryVal } from './header';
const url = `https://api.themoviedb.org/3/search/movie`;

export default async function fetchFilmByKeywords() {
  try {
    return await axios
      .get(url, {
        params: {
          api_key: API_KEY,
          query: `${queryVal}`,
        },
      })
      .then(res => res);
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
}
