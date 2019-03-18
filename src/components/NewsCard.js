import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const NewsCard = ({article}) =>
    <div className="card"
         styles={{width: '18rem'}}>
        <img className="card-img-top"
             src={article.urlToImage}/>
        <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.content}</p>
        </div></div>
export default NewsCard;