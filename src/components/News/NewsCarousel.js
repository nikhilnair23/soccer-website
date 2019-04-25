import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Redirect} from 'react-router';
import './news.css'
import {withRouter} from 'react-router';

class NewsCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    navigate = (title, description, content, url, urlToImage, date, author ) =>
        this.props.history.push({
            pathname:'/searchItem',
            state: {
                title: title,
                description: description,
                content: content,
                url: url,
                urlToImage: urlToImage,
                date: date,
                author: author
            }
        })

    render() {
        const {index, direction} = this.state;
        return (
            <div className="card-cont">
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                    interval = {40000}
                    fade={true}
                >
                        {
                            this.props.articles.map((article) =>
                                <Carousel.Item>
                                    <img className="d-block rounded socc-news-img"
                                         src={article.urlToImage}
                                    />
                                    <Carousel.Caption>
                                        <a  className="article-link"
                                            onClick={() => this.navigate(article.title,article.description,article.content,
                                            article.url, article.urlToImage, article.publishedAt, article.author
                                        )}
                                            >
                                            <p className="article-text">{article.title}</p>
                                        </a>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        }
                </Carousel>
            </div>
        );
    }
}

export default withRouter(NewsCarousel)
