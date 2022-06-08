import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import moviesApi from "../services/movies-api";
import Cast from "./Cast";
import Reviews from "./Reviews";

export default class MovieDetailsPage extends Component {
    state = {
        movieDetails: {}
    }

    componentDidMount() {
        moviesApi.fetchMovieDetails(this.props.match.params.movieId)
            .then(movieDetails => this.setState({ movieDetails }))
    }

    render() {
        const { movieDetails } = this.state
        const {
            genres, title, overview, poster_path,
            production_countries, release_date,
            tagline, vote_average } = this.state.movieDetails
        return (
            <>
                <h1>{title}</h1>
                <div className="movieDescription">
                    <div className="description">
                        <p>Genres:</p>
                        <ul>
                            {(genres || []).map(genre =>
                                <li key={genre.id}>
                                    {genre.name}
                                </li>
                            )}
                        </ul>
                        <p>Average vote: {vote_average}</p>
                        <p>Release date: {release_date}</p>
                        <p>Production countries:</p>
                        <ul>
                            {(production_countries || []).map(countrie =>
                                <li key={countrie.iso_3166_1}>
                                    {countrie.name}
                                </li>
                            )}
                        </ul>
                        <p>{tagline}</p>
                        <p>{overview}</p>
                    </div>

                    <div className="poster">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt={`Poster download error`} >
                        </img>
                    </div>
                </div>

                <div className="links">
                    <Link to={`${this.props.match.url}/${movieDetails.id}-cast`}>Cast</Link>
                    <Link to={`${this.props.match.url}/${movieDetails.id}-reviews`}>Reviews</Link>
                    <Route path={`${this.props.match.path}/:movieId-cast`} component={Cast}></Route>
                    <Route path={`${this.props.match.path}/:movieId-reviews`} component={Reviews}></Route>
                </div>
            </>
        )
    }
}

