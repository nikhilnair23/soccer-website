import React from 'react';
import {Component} from 'react';

class Match_Details extends Component {
    constructor(props) {
        super(props);
        this.state= {
            h2h: [],
            fixtureById: []
        }
    }

    componentDidMount() {
        const {h2h} = this.props;
        const {fixtureById} = this.props;
        this.setState(
            {
                h2h: h2h,
                fixtureById: fixtureById
            }
        )
    };

    render() {
        const {h2h, fixtureById} = this.props;
        console.log(h2h, fixtureById);
        return (
            <div>
                {
                    //  console.log(this.state.h2h, this.state.fixtureById)
                }
                <button onClick={() => this.props.reset()}>
                    Go Back
                </button>
            </div>
        )
    }
}

export default Match_Details;