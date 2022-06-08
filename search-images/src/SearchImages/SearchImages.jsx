import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader'

class SearchImages extends Component {
    state = {
        searchWord: '',
        page: '',
        key: '26281022-8e19a91793d1663c4a43dd3fc',
        photos: [],
        loading: false,
        error: null,
    }

    componentDidUpdate(prevPops, prevState) {
        const prevSearchWord = prevState.searchWord;
        const nextSearchWord = this.state.searchWord;
        prevSearchWord !== nextSearchWord && this.fetchImages();
        prevState.photos !== this.state.photos && prevState.photos.length !== 0 && (
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            })
        )

    }

    fetchImages = () => {
        this.setState({ loading: true })
        axios
            .get(`https://pixabay.com/api/?q=${this.state.searchWord}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                this.setState(prevState => ({
                    photos: [...prevState.photos, ...response.data.hits],
                    page: prevState.page + 1,
                }));
                console.log(response.data.hits)
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    }

    handleSearchFormSubmit = word => {
        this.setState({
            searchWord: word,
            page: 1,
            photos: []
        })
    }

    render() {
        const { loading, photos, error } = this.state
        return (
            <>
                <Searchbar onSubmit={this.handleSearchFormSubmit} />
                {error && <h1>Woops, something went wrong: {error.message}</h1>}
                {photos.length > 0 && <ImageGallery photos={photos} />}
                {photos.length > 0 && !loading && <Button click={this.fetchImages} />}
                {loading && <Loader />}
            </>
        )
    }
}

export { SearchImages }