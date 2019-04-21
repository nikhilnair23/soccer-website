import React, {Component} from 'react'
import './comment.css'

const NewComment = (props) => {
    debugger;
    return(
        <div className="block-comment-content module text">
            <div className="comment-user">
                <div className="comment-user-avatar-wrap">
                    <a>
                        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/3/profile/profile-512_29.jpg" className="comment-avatar" alt="" />
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
                            {new Date(props.details.time).toLocaleString()}
                        </span>
                    </a>
                </div>
            </div>

            <div className="comment-text">
                <p>{props.details.body}</p>
            </div>
        </div>
    )
}

export default NewComment