import React, { Component } from 'react';
import axios from 'axios';

class Request extends Component {
    state = {
        articles: [],
        loading: true,
    }

    componentDidMount() {
        axios
            .get(`https://hn.algolia.com/api/v1/search?query=react`)
            .then(response => {
                this.setState({
                    articles: response.data.hits,
                    loading: false
                });
            });
    }

    render() {
        return (
            <div>
                
                {this.state.loading ? (
                    <div>Loading...</div>
                ) : (
                    <ul>
                        {this.state.articles.map(article => (
                            <li key={article.objectID}>
                                <a href={article.url} target="_blank" rel="noreferrer">
                                    {article.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
}

export default Request;