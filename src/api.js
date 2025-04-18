import axios from 'axios';
const API_KEY = 'w8YNmvT_FiPJSIKmC5v_1kQDzmiWuOcLKmx24W7GPGs'; 
const BASE_URL = 'https://api.unsplash.com/search/photos';
export const fetchImages = async (value, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query: value,
      page,
      per_page: 10,
      client_id: API_KEY,
    },
  });
  return response.data;
};
