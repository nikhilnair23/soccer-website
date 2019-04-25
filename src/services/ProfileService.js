export default class ProfileService {

    constructor() {
        this.url =
            "http://localhost:5000/fixtures/";
    }

    updateProfile = (un, pw, fn, ln) => {
        return (fetch('http://localhost:5000/profile/' + un, {
                          method: 'PUT',
                          headers: {'Content-Type': 'application/json'},
                          body: JSON.stringify({
                                                   password: pw,
                                                   first_name: fn,
                                                   last_name: ln
                                               })
                      }
        ));
    };

    follow = (un_following, un_followed) => {
        return (fetch('http://localhost:5000/follow_user', {
                          method: 'POST',
                          headers: {'Content-Type': 'application/json'},
                          body: JSON.stringify({
                                                   username_following: un_following,
                                                   username_followed: un_followed
                                               })
                      }
        ));
    };

    deleteProfile = (username) => {
        return (
            fetch('http://localhost:5000/profile/' + username, {
                method: 'delete',
                credentials:'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
        );
    };

    getProfile = (username) => {
        return (
            fetch('http://localhost:5000/profile/' + username, {
                method: 'get',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
        );
    }

    getUsersFollowed = (username) => {
        return (
            fetch('http://localhost:5000/profile/follow/' + username, {
                method: 'get',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
        );
    }

}