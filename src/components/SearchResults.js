import React, {Component} from 'react'
import Navigation from "./Navigation/Navigation";
export default class SearchResults extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation/>
                </div>
                <h1>ASDFDASFASD</h1>
                <h1 className="text-white">{this.props.location.state.articles.length}</h1>
            </div>
        );
    }

}