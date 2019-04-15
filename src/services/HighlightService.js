export default class HighlightService {
    constructor(props) {
       this.url="https://www.scorebat.com/video-api/v1/"
    }


    get_highlights = () =>
        fetch(this.url,{
            method: 'get',
        }).then(response => {
            return response.json()
        })
}