import React, {Component} from 'react'
import NewComment from "./NewComment";
import AddCommentForm from "./AddCommentForm";
import CommentService from '../../services/CommentService'
import UserService from '../../services/UserService'
import './comment.css'

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
        this.commentService = new CommentService();
        this.userService = new UserService();
        this.commentService.get_news_comments(this.props.url).then((comments)=>{
            console.log(comments);
                this.setState({
                    comments: comments.body
                })
        })
    }

    addComment = (commentData) => {
        this.userService.logged_in().then(response => {
            if (response.data !== "NOT_LOGGED_IN") {
                console.log(response);
                var timeStamp = (new Date()).getTime();
                let newComment = {
                    "comment": commentData.commentBody,
                    "user": response.data.username,
                    "date": timeStamp
                }
                this.commentService.add_news_comment(newComment, this.props.url).then(response => {
                    debugger;
                    this.state.comments.push(newComment)
                    this.setState({
                        comments: this.state.comments
                    });
                })
            }
            else{
                alert('You aint logged in')
            }
        })
    }

    renderComment = (key) => {
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
                <div className="add-comment-box">
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
                </div>
            </div>
        );
    }

}