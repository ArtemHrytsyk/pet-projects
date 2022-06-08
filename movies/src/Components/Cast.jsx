import React, { Component } from "react";
import moviesApi from "../services/movies-api";

export default class Cast extends Component {
    state = { cast: [] }

    componentDidMount() {
        moviesApi.fetchCast(this.props.match.params.movieId)
            .then(cast => this.setState({ cast: cast.cast }))
    }

    componentDidUpdate() {
        console.log(this.state.cast)
        console.log(this.props.match.params.movieId)
    }

    render() {
        return (
            <>
                {(this.state.cast && this.state.cast.length > 0)
                    ? this.state.cast.map(person =>
                        <li key={person.id}>
                            {person.name}: {person.character}
                        </li>)
                    : <p>Sorry, we do not have information about cast of this film</p>}

            </>
        )
    }
}