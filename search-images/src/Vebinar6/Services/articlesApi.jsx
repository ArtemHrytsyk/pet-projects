import axios from 'axios';

const fetchArticlesWithQuery = (searchQuery, page) => {
    return axios
    .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}&hitsPerPage=5`)
    .then(response => response.data.hits)
}

export default {fetchArticlesWithQuery}