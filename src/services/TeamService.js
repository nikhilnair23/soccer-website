import teams from "../services/teams.json"

export default class TeamService {
    constructor(props) {
        this.url = "https://api-football-v1.p.rapidapi.com/teams/league/"
    }

    get_teams = () => {
        return teams
    };

    get_team = (teamId) => {

    }

    findTeams = (leagueId) =>
        fetch(this.url + leagueId, {
            method: 'get',
            headers: {
                'X-RapidAPI-Key': 'b83be741d1mshbbc318cf68d0e9fp139528jsn0cddc0e04919'
            }
        }).then((response) => {
                    return response.json()
                }
        );

    getLeagueStanding = (leagueId) => {
        let url2 = "https://api-football-v1.p.rapidapi.com/leagueTable/"
        return (
            fetch(url2 + leagueId, {
                method: 'get',
                headers: {
                    'X-RapidAPI-Key': 'b83be741d1mshbbc318cf68d0e9fp139528jsn0cddc0e04919'
                }
            }).then((response) => {
                        return response.json()
                    }
            )
        );
    }

    getTeamPlayers = (teamId) => {
        let url2 = "https://api-football-v1.p.rapidapi.com/players/2018/"
        return (
            fetch(url2 + teamId, {
                method: 'get',
                headers: {
                    'X-RapidAPI-Key': 'b83be741d1mshbbc318cf68d0e9fp139528jsn0cddc0e04919'
                }
            }).then((response) => {
                        return response.json()
                    }
            )
        );
    }

    getTeamCrests = (team_id) => {
        return(
            fetch('http://localhost:5000/teams/team/' + team_id)
                .then(response => response.json())
        );
    }

}