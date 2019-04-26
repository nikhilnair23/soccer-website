export default class CommentService{

    constructor(props) {
        this.url="https://soccer-website-server-sp19.herokuapp.com"
    }


    get_news_comments = (url) => {
        let source= this.url + "/api/get_comment_news/";
        return(fetch(source,{
            method:"post",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                "url":url
            })

        }).then((response) => {
            console.log(response)
            return response.json()
        }))
    }

    add_news_comment = (comment,url) => {
        debugger;
        let dest = this.url+"/api/comment_news"
        return(fetch(dest,{
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                url: url,
                user: comment.user,
                comment: comment.body,
                date: comment.date
            })
        })).then(response => response)
    }

    delete_news_comment = (url,comment) => {
        debugger;
        let dest = this.url+"/api/comment_news"
        return(fetch(dest,{
            method: "delete",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                url: url,
                user: comment.user,
                comment: comment.body,
            })
        })).then(response => response)
    }
}