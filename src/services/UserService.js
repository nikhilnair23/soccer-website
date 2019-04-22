export default class UserService{
    constructor(props) {
        this.url = "http://localhost:5000/"
    }



    logged_in = () =>{
        debugger;
        let url2 = this.url+"loggedIn"
        return (fetch(url2,{
            credentials : 'include',
            method:'get'
        }).then((response) => {
            debugger;
            return response.json();
        }))
    }
}