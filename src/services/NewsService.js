//API KEY : 334c15d0c6464c22b41429935ea6f4d2

import articles from "../services/news.json"

export default class NewsService {
    constructor(){
        this.url = "https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=334c15d0c6464c22b41429935ea6f4d2"
        this.api_key= "334c15d0c6464c22b41429935ea6f4d2"
    }

    get_news(){
        /*return articles;*/
        return(fetch(this.url,{
            method:"get",
        }).then(function (response) {
                return response.json();
            })
        )
    }

}