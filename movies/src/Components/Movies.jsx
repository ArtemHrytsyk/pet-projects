import React, { Component } from "react";
import moviesAPI from '../services/movies-api';
import { Link } from 'react-router-dom';
import SearchBox from "./SearchBox";

export default class Movies extends Component {
    state = {
        movies: [],
        movieName: ''
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props)
        // const params = queryString.parse(this.props.location.search);
        // console.log(params)
        prevState !== this.state &&
            moviesAPI.fetchMoviesByName(this.state.movieName)
                .then(movies => this.setState({ movies: movies.results }))
    }

    handleMovieSearch = movie => {
        // this.props.history.push({
        //     pathname: this.props.location.pathname,
        //     search: `${movie}`
        // })
        this.setState({ movieName: movie })
    }

    render() {
        const { movies } = this.state
        const { match } = this.props

        return (
            <>
                <SearchBox onSubmit={this.handleMovieSearch} />
                {movies && (
                    <ul>
                        {movies.map(movie =>
                            <li key={movie.id}>
                                <Link to={`${match.url}/${movie.id}`}>{movie.original_title}</Link>
                            </li>
                        )}
                    </ul>
                )}
            </>
        )
    }
}