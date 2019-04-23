import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Redirect} from 'react-router';
import './news.css'

export default class NewsCarousel extends React.Component {
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

    render() {
        const {index, direction} = this.state;
        return (
            <div className="card-cont">
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                    interval = {4000}
                    fade={true}
                >
                        {
                            this.props.articles.map((article) =>
                                <Carousel.Item>
                                    <img className="d-block rounded socc-news-img"
                                         src={article.urlToImage}
                                    />
                                    <Carousel.Caption>
                                        <a href={article.url} target="_blank">
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
