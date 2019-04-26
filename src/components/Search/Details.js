import React, {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import CommentBox from "../Comments/CommentBox"
import comments from '../../data/comments'
import UserService from "../../services/UserService";
import './search.css'
export default class Details extends Component{

    constructor(props) {
        super(props);

        this.state={
            user:'',
            loggedIn: false
        }
        this.userService = new UserService();

        this.userService.is_logged_in().then(response => {
            console.log(response.data);
            if (response.data !== "NOT_LOGGED_IN") {
                this.setState({
                    loggedIn:true,
                    user:response.data
                })
            }
        })
    }

    getComments = () =>{
        let promise = new Promise(function (resolve) {
            resolve(comments.comments);
        })
        return promise
    }

    normalizeComment = (comment) => {

        const { id} = comment.id;
        const { body} = comment.body;

        return {
            id,
            bodyDisplay: body,
        };
    };



    render() {
        if (this.props.location.state===undefined){
            return(
            <Redirect to={'/'}/>
        )
        }
        return(
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation loggedIn ={this.state.loggedIn}
                                user={this.state.user}/>
                </div>
                <div className="row socc-height-inherit result-card-container">
                    <div className="result-card">
                        {this.props.location.state.title !== undefined && <div className="card mt-2">
                            <div className="card-header socc-card-header">
                                <img className="socc-card-img"
                                     height="300px"
                                     width="300px"
                                     src={this.props.location.state.urlToImage}/>
                                <a href={this.props.location.state.url} target="_blank">
                                <div className="font-weight-bold details-title">{this.props.location.state.title}</div>
                                </a>
                            </div>
                            <div className="card-body">
                                <p className="font-italic card-content">{this.props.location.state.content}</p>
                            </div>
                        </div>
                        }
                        <div>
                            <CommentBox
                                url = {this.props.location.state.url}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

// export default withRouter(Details)