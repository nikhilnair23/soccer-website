export default class UserService{
    constructor(props) {
        this.url = "https://soccer-website-server-sp19.herokuapp.com/"
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

    sign_out = () => {
        let url2 = this.url + "signout"
        return (fetch(url2,{
            credentials:'include',
            method:'post'
        }).then((response) => {
            return response;
        }))
    }

    log_in = () => {

    }

    addTeamToFollowList = (username,teamId,team) => {
        let url2 = this.url + 'profile/teams'
        return(fetch(url2,{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                team_id: teamId,
                team: team
            })
        })).then(response => response)
    }

    getTeamsFollowed = (username) => {
        let url2= this.url + 'profile/teams/'+username
        return(fetch(url2,{
            method:'get'
        })).then(response => response.json())
    }

    getListOfUsers = () =>
        fetch(this.url+'/users').then(response => response.json())
}