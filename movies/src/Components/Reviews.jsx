import React, { Component } from "react";
import moviesApi from "../services/movies-api";

export default class Reviews extends Component {
    state = { content: '' }

    componentDidMount() {
        moviesApi.fetchReviews(this.props.match.params.movieId)
            .then(res => this.setState({ content: res.results[0].content }))
    }

    render() {
        return (
            <>
                {this.state.content && this.state.content.length > 0
                    ? <p>{this.state.content}</p>
                    : <p>Sorry, we have no no reviews for this film yet :(</p>}
            </>
        )
    }
}