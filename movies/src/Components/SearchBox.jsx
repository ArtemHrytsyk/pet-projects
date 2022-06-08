import React, { Component } from "react";

export default class SearchBox extends Component {
    state = {
        value: ''
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
    }

    formSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value)
        this.setState({ value: '' })
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <p> Find movie by key word </p>
                <input
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.value}
                >
                </input>
                <button type='submit'>Search</button>
            </form>
        )
    }
}