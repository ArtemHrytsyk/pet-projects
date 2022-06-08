import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import Notification from '../Notification/Notification';
import ArticlesList from '../ArticlesList/ArticlesList';
import SearchForm from '../SearchForm/SearchForm'
import articlesApi from '../Services/articlesApi';

class Rest extends Component {
    state = {
        articles: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 0
    }

    componentDidMount() {
        // this.setState({ loading: true })
        // this.fetchArticles('react')        

        // axios
        //     .get(`https://hn.algolia.com/api/v1/search?query=react`)
        //     .then(response => { this.setState({ articles: response.data.hits }); })
        //     .catch(error => this.setState({ error }))
        //     .finally(() => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        if (prevQuery !== nextQuery) {
            this.fetchArticles()
        }
    }


    fetchArticles = () => {
        this.setState({ loading: true })
        articlesApi
            .fetchArticlesWithQuery(this.state.searchQuery, this.state.page)
            .then(articles => {
                console.log(articles)
                this.setState(prevState => ({
                articles: [...prevState.articles, ...articles],
                page: prevState.page + 1
            })
                )})
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    }

    handleSearchFromSubmit = query => {
        this.setState({
            searchQuery: query,
            page: 0,
            articles: []
        })
    }

    render() {
        const { articles, loading, error } = this.state
        return (
            <div>
                <SearchForm onSubmit={this.handleSearchFromSubmit} />
                {error && <Notification message={`Woops, something went wrong: ${error.message}`} />}
                {articles.length > 0 && <ArticlesList articles={articles} />}
                {loading && <Spinner message='Loading...' />}
                {articles.length > 0 && !loading && <button type='button' onClick={this.fetchArticles}>Load more...</button>}
            </div>
        )
    }
}

export {Rest};