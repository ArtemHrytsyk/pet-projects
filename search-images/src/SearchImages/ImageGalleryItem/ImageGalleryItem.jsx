import React, { Component } from 'react'
import Modal from '../Modal/Modal'

export default class ImageGalleryItem extends Component {
    state = {
        showModal: false,
        imageInModal: ''
    }

    toggleModal = (e) => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            imageInModal: e.target.alt,
        }))
    }

    handleEscape = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <>
                <img
                    src={this.props.webFormat}
                    alt={this.props.largeImage}
                    className="ImageGalleryItem-image"
                    onClick={this.toggleModal}
                />
                {this.state.showModal && <Modal
                    handleEscape={this.handleEscape}
                    largeImage={this.state.imageInModal}
                />}
            </>
        )
    }
}
