import React, { Component } from "react";
import moviesApi from "../services/movies-api";
import { Link } from 'react-router-dom';
import routes from "../routes";

export default class Home extends Component {
    state = {
        movieTrends: []
    }

    componentDidMount() {
        moviesApi.fetchMovieTrends()
            .then(res => this.setState({ movieTrends: res.results }))
    }

    render() {
        return (
            <>
                <h2>Today's trends:</h2>
                {this.state.movieTrends.length > 0 &&
                    (<ul>
                        {this.state.movieTrends.map(movie =>
                            <li key={movie.id}>
                                <Link to={`${routes.movies}/${movie.id}`}>{movie.title}</Link>
                            </li>)}
                    </ul>)
                }
            </>
        )
    }
}