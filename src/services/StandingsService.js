export default class StandingsService {

    constructor() {
        this.url =
            "http://localhost:5000/standings/";
    }

    findStandingsByLeagueId = (league_id) => {
        return (fetch('http://localhost:5000/standings/'+league_id)
            .then(response => response.json()));
    }

}