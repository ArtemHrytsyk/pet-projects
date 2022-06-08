const baseURL = 'http://api.tvmaze.com';

const fetchShowDetails = showID => {
    return fetch(`${baseURL}/shows/${showID}`)
    .then(res => res.json());
};

const fetchShowsWithQuery = searchQuery => {
    return fetch(`${baseURL}/search/shows?q=${searchQuery}`)
        .then(res => res.json())
        .then(entries => entries.map(entry => entry.show));
};

export default { fetchShowDetails, fetchShowsWithQuery };
