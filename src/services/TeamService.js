import teams from "../services/teams.json"

const API_KEY = "b83be741d1mshbbc318cf68d0e9fp139528jsn0cddc0e04919"

export default class TeamService {
    constructor(props) {
        this.url = "https://api-football-v1.p.rapidapi.com/v2"
        this.url2= "https://soccer-website-server-sp19.herokuapp.com"
    }

    get_teams = () => {
        return teams
    };

    get_team = (teamId) => {
        return(fetch(this.url2 + '/api/team/' + teamId)
            .then(response => response.json()))
    }

    getAllTeams = () =>
        fetch(this.url2+'/teams/all')
            .then(response => response.json())

    findTeams = (leagueId) =>
        fetch(this.url + "/teams/league/" + leagueId, {
            method: 'get',
            headers: {
                'X-RapidAPI-Key': API_KEY
            }
        }).then((response) => {
                    return response.json()
                }
        );

    getLeagueStanding = (leagueId) => {
        return (
            fetch(this.url1 + "/leagueTable/" + leagueId, {
                method: 'get',
                headers: {
                    'X-RapidAPI-Key': API_KEY
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
                    'X-RapidAPI-Key': API_KEY
                }
            }).then((response) => {
                        return response.json()
                    }
            )
        );
    }

    getTeamCrests = (team_id) => {
        return(
            fetch(this.url2+'/teams/team/' + team_id)
                .then(response => response.json())
        );
    }

    getTeamCrest = (name) => {
        return(
            fetch(this.url2+'/api/team_logo',{
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    name:name
                })
            })
                .then(response => response.json())
        )
    }

}