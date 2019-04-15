export default class SearchService {
    constructor() {
        this.url = "https://newsapi.org/v2/everything?apiKey=334c15d0c6464c22b41429935ea6f4d2&sortBy=relevancy&sources=bbc-sport,four-four-two,football-italia,talksport&q="
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