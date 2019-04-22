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
            comments: [],
            user : '',
            loggedIn: false
        }
        this.commentService = new CommentService();
        this.userService = new UserService();
        this.commentService.get_news_comments(this.props.url).then((comments)=>{
            console.log(comments);
                this.setState({
                    comments: comments.body
                })
        })
        this.userService.logged_in().then(response => {
            if (response.data !== "NOT_LOGGED_IN") {
                this.setState({
                    loggedIn:true,
                    user:response.data
                })
            }
        })

    }

    addComment = (commentData) => {
            if (this.state.loggedIn !== false) {
                var timeStamp = (new Date()).getTime();
                let newComment = {
                    "comment": commentData.commentBody,
                    "user": this.state.user.username,
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
                alert('Please log in to comment')
            }
    }

    renderComment = (key) => {
        return (
            <li className="">
                <NewComment index={key.time} details={key} user={this.state.user}/>
            </li>
        )
    }

    render() {

        console.log(this.state)
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