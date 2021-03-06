export default class ProfileService {

    constructor() {
        this.url =
            "https://soccer-website-server-sp19.herokuapp.com/fixtures/";
    }

    updateProfile = (un, pw, fn, ln) => {
        return (fetch('https://soccer-website-server-sp19.herokuapp.com/profile/' + un, {
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
        return (fetch('https://soccer-website-server-sp19.herokuapp.com/follow_user', {
                          method: 'POST',
                          headers: {'Content-Type': 'application/json'},
                          body: JSON.stringify({
                                                   username_following: un_following,
                                                   username_followed: un_followed
                                               })
                      }
        ).then(response => response)
        );
    };

    unfollow = (un_following, un_followed) => {
        return (fetch('https://soccer-website-server-sp19.herokuapp.com/unfollow_user', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username_following: un_following,
                    username_followed: un_followed
                })
            }
        ));
    }

    deleteProfile = (username) => {
        return (
            fetch('https://soccer-website-server-sp19.herokuapp.com/profile/' + username, {
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
            fetch('https://soccer-website-server-sp19.herokuapp.com/profile/' + username, {
                method: 'get',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
        );
    }

    getUsersFollowed = (username) => {
        debugger;
        return (
            fetch('https://soccer-website-server-sp19.herokuapp.com/profile/follow/' + username, {
                method: 'get',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
        );
    }

}