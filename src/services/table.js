import teams from "../services/teams.json"

export default class TeamService {
    constructor(){
        // unirest.get("https://api-football-v1.p.rapidapi.com/leagueTable/{league_id}")
        //     .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
        //     .header("X-RapidAPI-Key", "SIGN-UP-FOR-KEY")
        //     .end(function (result) {
        //         console.log(result.status, result.headers, result.body);
        //     });
    }

    get_teams(){
        return teams;
    }

}