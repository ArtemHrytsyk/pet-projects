import React, { Component } from "react";
import { Link } from "react-router-dom";
import tvAPI from '../services/tv-api';
import Searchbox from "./Searchbox";
import getQueryParams from "../utils/getQueryParams";

export default class Shows extends Component {
    state = {
        shows: []
    }

    componentDidMount() {
        const { query } = getQueryParams(this.props.location.search)
        if (query) {
            this.fetchShows(query)
            //return;
        }
        //якщо нема квері то зарендерить бетмена
        //this.fetchShows('batman')
    }

    componentDidUpdate(prevProps, prevState) {
        const { query: prevQuery } = getQueryParams(prevProps.location.search);
        const { query: nextQuery } = getQueryParams(this.props.location.search);
        prevQuery !== nextQuery && this.fetchShows(nextQuery)
    }

    handleQueryChange = query => {
        this.props.history.push({
            // pathname: this.props.location.pathname, цей інаступний рядок дадуть одинаовий результат
            ...this.props.location,
            search: `query=${query}`
        })
    }

    fetchShows = query => {
        tvAPI
            .fetchShowsWithQuery(query)
            .then(shows => this.setState({ shows }))
    }

    render() {
        const { shows } = this.state;
        const { match } = this.props;
        return (
            <>
                <Searchbox onSubmit={this.handleQueryChange} />
                {shows.length > 0 &&
                    <ul>
                        {shows.map(show =>
                            <li key={show.id}>
                                <Link
                                    to={{
                                        pathname: `${match.url}/${show.id}`,
                                        state: {from: this.props.location},
                                        }}>
                                    {show.name}
                                </Link>
                            </li>)}
                    </ul>
                }
            </>
        )
    }
}