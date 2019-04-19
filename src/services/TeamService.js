export default class TeamService {
    constructor(props) {
        this.url = "https://api-football-v1.p.rapidapi.com/teams/league/"
    }

    findTeams = (teamId) =>
        fetch(this.url+teamId,{
            method:'get',
            headers:{
                'X-RapidAPI-Key':'b83be741d1mshbbc318cf68d0e9fp139528jsn0cddc0e04919'
            }
        }).then((response) => {
                return response.json()
            }
        );
}