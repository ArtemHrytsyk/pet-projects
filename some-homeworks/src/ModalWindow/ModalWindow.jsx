import React, { Component } from 'react';
import styles from './ModalWindow.module.css'

class ModalWindow extends Component {
    state = {
        showModal: false
    }

    componentDidMount() {
        console.log('Component MODAL mounted, event listener is working')
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        console.log('Component MODAL unmounted, event listener is removed')
        window.removeEventListener('keydown', e => {
            if (e.code === 'Escape') {
                this.setState(prevState => this.state.showModal && ({ showModal: !this.state.showModal }))
            }
        })
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.setState( prevState => this.state.showModal && ({ showModal: !this.state.showModal }))
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({ showModal: !this.state.showModal }))
    }

    render() {
        return (
            <div >
                <div>
                    {this.state.showModal === false && <h2  className={styles.modalText}>Click this button to see a modal window </h2>}
                    {this.state.showModal === false && <button className={styles.modalButton}
                        type='button'
                        onClick={this.toggleModal}>{this.state.showModal ? 'Hide' : 'Show'} modal
                    </button>}

                </div>
                
                {this.state.showModal &&
                    <div className={styles.modalContent} >
                        <h1>This is modal window</h1>
                        And modal content IS SHOWN
                        <br />
                        Press ESC or click this button to hide it
                        <br />
                        <br />
                        <button
                            className={styles.modalButton}
                            type='button'
                            onClick={this.toggleModal}>
                            {this.state.showModal ? 'Hide' : 'Show'} modal
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export { ModalWindow };