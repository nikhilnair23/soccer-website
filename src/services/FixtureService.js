export default class FixtureService {

    constructor() {
        this.url =
            "http://localhost:5000/fixtures/";
    }

    getFixturesByLeague = (league) => {
        return (fetch('http://localhost:5000/fixtures/'+league)
            .then(response => response.json()));
    };

    getH2H = (homeTeam, awayTeam) => {
        return (fetch('http://localhost:5000/fixtures/h2h/' + homeTeam + '/' + awayTeam)
            .then(response => response.json()));
    };

    getFixtureById = (fixture_id) => {
        return (fetch('http://localhost:5000/fixtures/id/' + fixture_id)
            .then(response => response.json()));
    };

}