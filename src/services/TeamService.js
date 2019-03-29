import teams from "../services/teams.json"

export default class TeamService {
    // constructor(){
    //     this.url = "https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=334c15d0c6464c22b41429935ea6f4d2"
    //     this.api_key= "334c15d0c6464c22b41429935ea6f4d2"
    // }

    get_teams(){
        return teams;
    }

}