import React from "react";
import {Component} from 'react';
import UCL from "./UCL";

const UCL_list = ({standings}) =>
    <div>
        {
                console.log(standings)
        }
        <UCL standings={standings.length > 0 ? standings : standings}/>
        {/*<UCL standings={this.props.standings.splice(8, 12)}/>*/}
        {/*<UCL standings={this.state.groupC}/>*/}
        {/*<UCL standings={this.state.groupD}/>*/}
        {/*<UCL standings={this.state.groupE}/>*/}
        {/*<UCL standings={this.state.groupF}/>*/}
        {/*<UCL standings={this.state.groupG}/>*/}
        {/*<UCL standings={this.state.groupH}/>*/}
    </div>

export default UCL_list;