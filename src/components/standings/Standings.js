import React from 'react';
import {Component} from 'react';
import './Standings.css';
import UCL from "./UCL";
import Leagues from "./Leagues";
import Table from "./Table";

class Standings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ucl: [],
            epl: [],
            laliga: [],
            bundesliga: [],
            seriea: [],
            league: 'ucl'
        };

        fetch('http://localhost:5000/standings/132')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    ucl: x['api']['standings'][0]
                }
            ));

        fetch('http://localhost:5000/standings/2')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    epl: x['api']['standings'][0]
                }
            ));

        fetch('http://localhost:5000/standings/87')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    laliga: x['api']['standings'][0]
                }
            ));

        fetch('http://localhost:5000/standings/8')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    bundesliga: x['api']['standings'][0]
                }
            ));

        fetch('http://localhost:5000/standings/94')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    seriea: x['api']['standings'][0]
                }
            ));

    }

    changeLeague = (league) => {
        //document.getElementById(this.state.league).classList.remove('active');
        this.setState(
            {
                league: league
            }
        );
        //document.getElementById(this.state.league).classList.add('active');
    };

    render() {
        return (
            // this.state.league === 'ucl'
            // ?
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-md-3 bg-light-green'>
                        <Leagues changeLeague={this.changeLeague}
                                 league={this.state.league}/>
                    </div>

                    <div className="col-md-9">
                        {/*{console.log(this.state.ucl)}*/}
                        {
                            this.state.league === 'ucl'
                            ?
                            <UCL standings={this.state.ucl}/>
                            :
                            this.state.league === 'epl'
                            ?
                            <Table standings={this.state.epl}/>
                            :
                            this.state.league === 'laliga'
                            ?
                            <Table standings={this.state.laliga}/>
                            :
                            this.state.league === 'bundesliga'
                            ?
                            <Table standings={this.state.bundesliga}/>
                            :
                            this.state.league === 'seriea'
                            ?
                            <Table standings={this.state.seriea}/>
                            :
                            <div>

                            </div>
                        }
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => this.props.onRouteChange('home')}>Home
                </button>
            </div>
            // :
            // this.state.league === 'epl'
            // ?
            // <div className='container-fluid'>
            //     <div className="row">
            //         <Leagues/>
            //         <div className="col-md-9">
            //             <Matches standings={this.state.ucl}/>
            //         </div>
            //     </div>
            //
            //     <button
            //         type="button"
            //         onClick={() => this.props.onRouteChange('home')}>Home
            //     </button>
            // </div>
            // :
            // this.state.league === 'laliga'
            // ?
            // <div className='container-fluid'>
            //     <div className="row">
            //         <Leagues/>
            //         <div className="col-md-9">
            //             <Matches standings={this.state.ucl}/>
            //         </div>
            //     </div>
            //
            //     <button
            //         type="button"
            //         onClick={() => this.props.onRouteChange('home')}>Home
            //     </button>
            // </div>
            // :
            // this.state.league === 'bundesliga'
            // ?
            // <div className='container-fluid'>
            //     <div className="row">
            //         <Leagues/>
            //         <div className="col-md-9">
            //             <Matches standings={this.state.ucl}/>
            //         </div>
            //     </div>
            //
            //     <button
            //         type="button"
            //         onClick={() => this.props.onRouteChange('home')}>Home
            //     </button>
            // </div>
            // :
            // this.state.league === 'seriea'
            // ?
            // <div className='container-fluid'>
            //     <div className="row">
            //         <Leagues/>
            //         <div className="col-md-9">
            //             <Matches standings={this.state.ucl}/>
            //         </div>
            //     </div>
            //
            //     <button
            //         type="button"
            //         onClick={() => this.props.onRouteChange('home')}>Home
            //     </button>
            // </div>
            // :
            // <div>
            //     Error
            // </div>
        )
    }

}

export default Standings;