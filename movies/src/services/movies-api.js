const baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'f815381f45143776e4d25b7103c32a69'
const language = 'en-US'

const fetchMoviesByName = (movieName) => {
    return fetch(`${baseURL}/search/movie?api_key=${apiKey}&language=${language}&query=${movieName}&page=1`)
        .then(res => res.json())
}

const fetchMovieTrends = () => {
    return fetch(`${baseURL}/trending/movie/day?api_key=${apiKey}`)
        .then(res => res.json())
}

const fetchMovieDetails = (movieId) => {
    return fetch(`${baseURL}/movie/${movieId}?api_key=${apiKey}`)
        .then(res => res.json())
}

const fetchCast = (movieId) => {
    return fetch(`${baseURL}/movie/${movieId}/credits?api_key=${apiKey}&language=${language}`)
        .then(res => res.json())
}

const fetchReviews = (movieId) => {
    return fetch(`${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}&language=${language}&page=1`)
        .then(res => res.json())
}

export default {
    fetchMoviesByName,
    fetchMovieTrends,
    fetchMovieDetails,
    fetchCast,
    fetchReviews
}