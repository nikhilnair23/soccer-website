import React, {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom';
import Navigation from "./Navigation/Navigation";
const SearchResultItem = (props) =>{
    console.log(props)
    return(
        <div className="socc-height-inherit socc-background">
            <div className={"container-fluid"} id="navbar-container">
                <Navigation/>
            </div>
            <div className="row socc-height-inherit">
                <div className="col-3">
                    <h2 className="text-white text-wrap">Placeholder</h2>
                </div>
                <div className="col-6">
                    {props.location.state.title !== undefined && <div className="card mt-2">
                        <div className="card-header socc-card-header">
                            <img className="socc-card-img"
                                 height="300px"
                                 width="300px"
                                 src={props.location.state.urlToImage}/>
                            <h3 className="font-weight-bold">{props.location.state.title}</h3>
                        </div>
                        <div className="card-body">
                            <p className="font-italic">{props.location.state.content}</p>
                        </div>
                    </div>
                    }
                </div>
                <div className="col-3">
                    <h2 className="text-white">sample</h2>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SearchResultItem)