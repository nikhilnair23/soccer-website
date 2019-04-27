export default class StandingsService {

    constructor() {
        this.url =
            "https://soccer-website-server-sp19.herokuapp.com/standings/";
    }

    findStandingsByLeagueId = (league_id) => {
        return (fetch('https://soccer-website-server-sp19.herokuapp.com/standings/'+league_id)
            .then(response => response.json()));
    }

}