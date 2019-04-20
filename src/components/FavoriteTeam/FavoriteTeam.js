import React, {Component} from 'react';
import TeamService from "../../services/TeamService";
import TeamList from "./TeamList";
import './TeamCard.css';

export {Component} from 'react';


class FavoriteTeam extends Component {
    constructor(props) {
        super(props);
        this.teamService = new TeamService();
        this.state = {
            teams: [],
            search_team: '1234ABC'
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

        if (event.target.value.length < 2) {
            this.setState(
                {
                    search_team: '1234ABC'
                }
            )
        }
        else {
            this.setState(
                {
                    search_team: event.target.value
                }
            )
        }
    };

    render() {
        return (
            <div className='tc'>
                <h1 className='f1 bg-washed-yellow'>Select your favorite team</h1>
                <input
                    className = 'pa3 ma4 b--green hover-bg-lightest-blue bg-light-yellow tc inputfav'
                    type='search'
                    placeholder = 'Search for your team(type 2 letters)'
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
