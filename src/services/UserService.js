export default class UserService{
    constructor(props) {
        this.url = "http://localhost:5000/"
    }



    is_logged_in = () =>{
        let url2 = this.url+"loggedIn"
        return (fetch(url2,{
            credentials : 'include',
            method:'get'
        }).then((response) => {
            return response.json();
        }))
    }
}