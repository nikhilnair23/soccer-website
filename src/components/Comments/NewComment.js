import React, {Component} from 'react'
import './comment.css'

const NewComment = (props) => {
    return(
        <div className="">
            <div className="comment-user">
                <div className="comment-user-avatar-wrap">
                    <a>
                        <img src={"https://robohash.org/"+props.details.user} className="comment-avatar" alt="" />
                    </a>
                </div>
                <div className="comment-user-text">
                    <a href="#" data-username="cathbailh" className="comment-username">
                <span className="username">
                  {props.details.user}
                </span>
                    </a>
                    <span className="on"> on </span>
                    <a href="#">
                        <span className="on">
                            {new Date(props.details.date).toLocaleString()}
                        </span>
                    </a>
                </div>
            </div>

            <div className="comment-text-container">
            <div className="card comment-text">
                <h5 className ="p-1 comment-text-display">{props.details.comment}</h5>
            </div>
                {props.user.isAdmin ===1 && <button
                    onClick={() => props.deleteComment(props.details.comment,props.details.user)}
                    className="btn btn-danger">
                    DELETE</button>}
            </div>
        </div>
    )
}

export default NewComment