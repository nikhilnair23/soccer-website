export default class CommentService{

    get_news_comments = (url) => {
        let source= "http://localhost:5000/api/get_comment_news/";
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
        let dest = "http://localhost:5000/api/comment_news"
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
}