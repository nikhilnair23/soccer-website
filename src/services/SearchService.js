export default class SearchService {
    constructor() {
        this.url = "https://newsapi.org/v2/everything?sources=four-four-two,football-italia,talksport, bleacher-report, &apiKey=334c15d0c6464c22b41429935ea6f4d2&q="
    }

    search_news = (searchTerm) => {
        /*let emptyarray =['ASDF','sadfds'];
        return emptyarray;*/
       return( fetch(this.url + searchTerm,{
           method: 'get'
           }).then(response => response.json())
       )
    }
}