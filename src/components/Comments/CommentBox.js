import React, {Component} from 'react'
import NewComment from "./NewComment";
import AddCommentForm from "./AddCommentForm";
import './comment.css'

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    addComment = (commentData) => {
        var timeStamp = (new Date()).getTime();
        let newComment={
            "body" : commentData.commentBody,
            "user" : commentData.commentName,
            "time" : timeStamp
        }
        this.state.comments.push(newComment)
        console.log(this.state.comments)
        // this.state.comments['comment-id' + timeStamp] = commentData;
        this.setState({
            comments: this.state.comments
        });
    }

    renderComment = (key) => {
        debugger;
        return (
            <li className="">
                <NewComment index={key.time} details={key}/>
            </li>
        )
    }

    render() {

        console.log(this.state.comments)
        return (
            <div>
                <div className="comment-box">
                    <AddCommentForm addComment={this.addComment}/>
                </div>
                <div className="comment-box">

                    <ul className="comment-list">
                        {
                            Object
                                .values(this.state.comments)
                                // Creating a NEW array
                                .map(this.renderComment)
                        }
                    </ul>


                    {/*<pre>{JSON.stringify(this.state, null, 2)}</pre>*/}

                </div>
            </div>
        );
    }

}