import React, { Component } from "react";
import tvApi from "../services/tv-api";
import routes from '../routes'

export default class ShowDetails extends Component {
    state = { show: null }

    componentDidMount() {
        tvApi.fetchShowDetails(this.props.match.params.showId)
            .then(show => this.setState({ show }))
    }

    handleGoBack = () => {
        if(this.props.location.state && this.props.location.state.from) {
            this.props.history.push(this.props.location.state.from) 
        } else {
            this.props.history.push(routes.shows)
        }
    }
    


 
    render() {
        return (
            <>
                <button type='button' onClick={this.handleGoBack}>Go back to list</button>
                <br/>
                {this.state.show &&
                    <>
                        <img src={this.state.show.image.medium} alt={this.state.show.name} />
                        <h1>{this.state.show.name}</h1>
                    </>}
            </>

        )
    }
}