import React, {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import CommentBox from "../Comments/CommentBox"
import comments from '../../data/comments'
export default class SearchResultItem extends Component{

    constructor(props) {
        super(props);

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
                        {this.props.location.state.title !== undefined && <div className="card mt-2">
                            <div className="card-header socc-card-header">
                                <img className="socc-card-img"
                                     height="300px"
                                     width="300px"
                                     src={this.props.location.state.urlToImage}/>
                                <a href={this.props.location.state.url}>
                                <h3 className="font-weight-bold">{this.props.location.state.title}</h3>
                                </a>
                            </div>
                            <div className="card-body">
                                <p className="font-italic">{this.props.location.state.content}</p>
                            </div>
                        </div>
                        }
                        <div>
                            <CommentBox
                                url = {this.props.location.state.url}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <h2 className="text-white">sample</h2>
                    </div>
                </div>
            </div>
        );
    }

}

// export default withRouter(SearchResultItem)