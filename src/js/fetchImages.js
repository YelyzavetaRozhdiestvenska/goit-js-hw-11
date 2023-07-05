import Notiflix from 'notiflix';
import axios from 'axios';

// Унікальний код доступу до API Pixabay

const KEY = '38086992-da778ca69db0828eccdceea4f';

axios.defaults.baseURL = 'https://pixabay.com/api/';

//Ліміт отриманих об'ектів на сторінці
const pageLimit = 40;

//Функція, що фетчить картинки

const fetchImages = async (queryToFetch, pageToFetch) => {
  const { data } = await axios({
    params: {
      key: KEY,
      q: queryToFetch,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: pageLimit,
      page: pageToFetch,
    },
  });
  return data;
};

export { fetchImages, pageLimit };
