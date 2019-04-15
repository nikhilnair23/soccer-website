import React, {Component} from 'react'
import Navigation from "./Navigation/Navigation";
import './Highlights.css'
import HighlightService from "../services/HighlightService";

let frameStyle = {
    width: '800px',
    height: '700px',
    overflow: 'hidden',
    display: 'block'
}
export default class Highlights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlights: []
        };
        this.highlightService = new HighlightService();
    }

    componentDidMount() {
        this.highlightService.get_highlights().then((highlights =>
                this.setState({
                    highlights: highlights
                })
        ))
    }


    render() {
        return (
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation/>
                </div>
                <div className="row socc-height-inherit">
                    <div className="col-2">
                        <h2 className="text-white text-wrap">Placeholder</h2>
                    </div>
                    <div className="col-10">
                        {this.state.highlights.size !== 0 && <div className="card-deck grid-container">
                            {/*{this.state.highlights.slice(0,5).map((highlight) =>
                                <div className="card">
                                    <div className="card-header">
                                        <img src={highlight.thumbnail}/>
                                    </div>
                                    <div className="card-body">
                                        <embed src ={highlight.embed}/>
                                    </div>
                                </div>
                            )}*/}
                            {/*<div>
                                <iframe src='https://www.scorebat.com/embed/g/730423/' frameBorder='0' width='560'
                                        height='590' allowFullScreen allow='autoplay; fullscreen'
                                        style={frameStyle}
                                        className='_scorebatEmbeddedPlayer_'></iframe>
                                {(function (d, s,
                                            id) {
                                    var js, fjs = d.getElementsByTagName(s)[0];
                                    if (d.getElementById(id)) return;
                                    js = d.createElement(s);
                                    js.id = id;
                                    js.src = 'https://www.scorebat.com/embed/embed.js?v=m2to';
                                    fjs.parentNode.insertBefore(js, fjs);
                                }(document,
                                    'script', 'scorebat-jssdk'))
                                }
                            </div>*/}
                            <div>
                                <iframe src='https://www.scorebat.com/embed/g/730424/?s=2' frameBorder='0'
                                        allowFullScreen allow='autoplay; fullscreen'
                                        style={frameStyle}
                                        className='_scorebatEmbeddedPlayer_'></iframe>
                                {(function (d, s,
                                            id) {
                                    var js, fjs = d.getElementsByTagName(s)[0];
                                    if (d.getElementById(id)) return;
                                    js = d.createElement(s);
                                    js.id = id;
                                    js.src = 'https://www.scorebat.com/embed/embed.js?v=mto';
                                    fjs.parentNode.insertBefore(js, fjs);
                                }(document,
                                    'script', 'scorebat-jssdk'))
                                    }
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        );
    }

}