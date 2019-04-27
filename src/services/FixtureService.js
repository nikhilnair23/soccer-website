export default class FixtureService {

    constructor() {
        this.url =
            "https://soccer-website-server-sp19.herokuapp.com/fixtures/";
    }

    getFixturesByLeague = (league) => {
        return (fetch('https://soccer-website-server-sp19.herokuapp.com/fixtures/'+league)
            .then(response => response.json()));
    };

    getH2H = (homeTeam, awayTeam) => {
        return (fetch('https://soccer-website-server-sp19.herokuapp.com/fixtures/h2h/' + homeTeam + '/' + awayTeam)
            .then(response => response.json()));
    };

    getFixtureById = (fixture_id) => {
        return (fetch('https://soccer-website-server-sp19.herokuapp.com/fixtures/id/' + fixture_id)
            .then(response => response.json()));
    };

}