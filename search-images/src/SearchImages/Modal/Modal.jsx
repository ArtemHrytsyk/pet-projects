import React, { Component } from 'react';

export default class Modal extends Component {

    componentDidMount() {
        console.log('modal mounted, event Listener is added')
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        console.log('modal unmounted, event Listener is remowed')
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        e.code === 'Escape' && this.props.handleEscape() 
    }

    render() {
        return (
            <div className="Overlay">
                <div className="Modal">
                    <img src={this.props.largeImage} alt="NONE" />
                </div>
            </div>
        )
    }
}