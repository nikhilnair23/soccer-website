import React, {Component} from 'react';
import TeamService from "../../services/TeamService";
import TeamList from "./TeamList";

export {Component} from 'react';


class FavoriteTeam extends Component {
    constructor(props) {
        super(props);
        this.teamService = new TeamService();
        this.state = {
            teams: [],
            search_team: ''
        }
    }

    componentDidMount() {
        console.log(this.teamService.get_teams()[0].teams)
        this.setState(
            {
                teams: this.teamService.get_teams()[0].teams
            }
        )
    }

    onSearchChange = (event) => {

        this.setState(
            {
                search_team: event.target.value
            }
        )
    };

    render() {
        return (
            <div className='tc'>
                <h1 className='f1 bg-washed-yellow'>Select your favorite team</h1>
                <input
                    className = 'pa3 ma4 ba b--green hover-bg-lightest-blue bg-light-yellow f3 tc'
                    type='search'
                    placeholder = 'Search for your team'
                    onChange={this.onSearchChange}/>
                <TeamList Teams={
                    this.state.teams.filter(
                        team => {
                            return team.name.toLowerCase()
                                .includes(
                                    this.state.search_team.toLowerCase()
                                )
                        }
                    )
                }
                />
            </div>
        );
    }
}

export default FavoriteTeam
