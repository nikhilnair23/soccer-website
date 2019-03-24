import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'

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
        const { index, direction } = this.state;

        return (
            <div className="col-8 card-cont">
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                fade = {true}
            >
                {
                this.props.articles.map((article) =>
                    <Carousel.Item>
                        <img className="d-block w-100 p-2 rounded"
                             src = {article.urlToImage}
                             width="480"
                             height ="400"

                        />
                        <Carousel.Caption>
                            <a href={article.url} target="_blank">
                            <p className="font-weight-bolder text-white">{article.title}</p>
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


/*
<Carousel.Item>
    <img
        className="d-block w-100"
        src="https://www.w3schools.com/bootstrap/ny.jpg"
        alt="First slide"
    />
    <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://www.w3schools.com/bootstrap/chicago.jpg"
alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://www.w3schools.com/bootstrap/newyork.jpg"
alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Third slide label</h3>
<p>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel.Item>*/



























/*
import NewsCard from "./NewsCard";
import React, {Component} from 'react'

export default class NewsCarousel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.w3schools.com/bootstrap/ny.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/bootstrap/chicago.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/bootstrap/newyork.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }

}*/
