import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '38494803-b3b4c85f97fe971422a222a26';

const QUERY_OPT = 'image_photo&orientation=horizontal&safesearch=true';

async function getQuery(value, page, per_page) {
  const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${value}&${QUERY_OPT}&page=${page}&per_page=${per_page}`);
  return response;
}

export { getQuery };

