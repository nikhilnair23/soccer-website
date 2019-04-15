import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const NewsCard = ({article}) =>
    <div className="card ">
        <img className="img-thumbnail"
             src={article.urlToImage}
        />
        <div className="card-body">
            <a href={article.url} className="text-danger" >
            <h5 className="card-title font-weight-bolder ">{article.title}</h5>
            </a>
            <p className="card-text font-weight-normal lead">{article.content}</p>
        </div></div>
export default NewsCard;