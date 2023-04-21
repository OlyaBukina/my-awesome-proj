import axios from 'axios';
import API_KEY from './common/api-key';
import { queryVal } from './header';

export default async function fetchFilms(url, page) {
  try {
    return await axios
      .get(url, {
        params: {
          api_key: API_KEY,
          query: `${queryVal}`,
          page,
        },
      })
      .then(res => res);
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
}
