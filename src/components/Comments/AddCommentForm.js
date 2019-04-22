import React, {Component} from 'react'
import './comment.css'

export default class AddCommentForm extends Component{
    constructor(props) {
        super(props);

    }

    processComment = (event)=> {
        event.preventDefault();
        // 1. Take data from from form
        var commentData = {
            commentBody: this.refs.desc.value
        }

        // 2. Pass data back to App
        this.props.addComment(commentData);

        // 3. Reset the form
        this.refs.commentForm.reset();
    }

    render() {
        return (
            <div className="callout secondary">
                {/*<h4 className="comment-header">Add a Comment</h4>*/}
                <form className="comment-form" ref="commentForm" onSubmit={this.processComment}>
                    <textarea className="comment-body-input" ref="desc" placeholder="Add your comment here" required/>
                    <div className="form-btn-container">
                    <button id="submit" type="submit" className="btn btn-sm btn-primary form-btn">Add Comment</button>
                    </div>
                </form>
            </div>
        );
    }
}
