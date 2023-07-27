import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '38494803-b3b4c85f97fe971422a222a26';

const QUERY_OPT = 'image_photo&orientation=horizontal&safesearch=true';

async function getQuery(value, page, per_page) {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${value}&${QUERY_OPT}&page=${page}&per_page=${per_page}`
  );
  return response;
}

export { getQuery };

/*axios.defaults.baseURL = `https://pixabay.com/api/`;

export async function searchByQuery(query, page) {
  return axios.get(
    `?key=${BASE_URL}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );
}*/
