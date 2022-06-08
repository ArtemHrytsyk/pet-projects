import React, { Component } from 'react';
import styles from './Clock.module.css'

class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString(),
    };

    intervalID = null;

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.setState({ time: new Date().toLocaleTimeString() }),
            1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render() {
        return (
            <div className={styles.clockFace}>
                {this.state.time}
            </div>
        )
    }
}

export { Clock };