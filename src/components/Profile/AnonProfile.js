import React from 'react';
import {Component} from 'react';
import ProfileService from "../../services/ProfileService";

import pro from './pro.png';
import casual from './casual.jpg';
import admin from './admin.jpg';
import './Profile.css';
import UserService from "../../services/UserService";

class AnonProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            loggedInUser: '',
            edit_mode: false,
            password: '',
            first_name: '',
            last_name: '',
            profile_pic: '',
            loggedIn: false,
            clubs_followed: [],
            users_followed: [],
            logged_in_followed: []
        };
        this.profileService = new ProfileService();
        this.userService = new UserService();
        this.userService.is_logged_in().then(response => {
            if (response.data !== "NOT_LOGGED_IN") {
                let loggedInUser = response.data
                this.profileService.getUsersFollowed(response.data.username)
                    .then((response) => {
                        this.setState({
                            logged_in_followed: response,
                            loggedIn: true,
                            loggedInUser: loggedInUser,
                            profile_pic: 'https://robohash.org/' + loggedInUser.username
                        })
                    })
            }
        });
        this.profileService.getProfile(this.props.match.params.username).then((response) => {
            this.setState({
                user: response,
                profile_pic: 'https://robohash.org/' + response.username
            })
        });
        this.profileService.getUsersFollowed(this.props.match.params.username)
            .then((response) => {
                this.setState({
                    users_followed: response
                })
            });
        this.userService.getTeamsFollowed(this.props.match.params.username)
            .then((response) => {
                this.setState({
                    clubs_followed: response.data
                })
            })
    }


    goHome = () =>
        this.props.history.push('/');

    goToUsers = () =>
        this.props.history.push('/users');

    goToTeam = (teamId) =>
        this.props.history.push('/teams/' + teamId)

    goToProfile = (user) =>
        this.props.history.push('/profile/' + user)

    followUser = () => {
        if (this.state.loggedIn === false) {
            alert("You must be signed in to follow.")
        }
        else {
            this.profileService.follow(this.state.loggedInUser.username, this.state.user.username)
                .then(response => {
                    debugger;
                    this.profileService.getUsersFollowed(this.state.loggedInUser.username)
                        .then((response) => {
                            debugger;
                            this.setState({
                                logged_in_followed: response
                            })
                        })
                })
        }
    };

    unfollowUser = () =>{
        this.profileService.unfollow(this.state.loggedInUser.username, this.state.user.username)
            .then(response =>
                this.profileService.getUsersFollowed(this.props.match.params.username)
                    .then((response) => {
                        debugger;
                        this.setState({
                            logged_in_followed: response
                        })
                    })
            )
    }

    checkIfUserIsFollowed = (arr, user) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].user_followed === user) {
                return true;
            }
        }
        return false;
    }

    render() {
        console.log(this.state);
        return (
            <div className='container-fluid tc'>
                <div
                    className='tc bg-washed-yellow ma2 br3 dib pa1 shadow-5 profile_card'>
                    <div>
                        <button
                            className="btn btn-warning pd5 ma2 home_button"
                            type="button"
                            onClick={() => this.goHome()}>Home Page
                        </button>
                    </div>
                    {
                        this.checkIfUserIsFollowed(this.state.logged_in_followed, this.props.match.params.username)
                            ?
                            <div className='fr'>
                                <button
                                    id='follow_button'
                                    className="btn btn-success pd5 ma2 follow_button"
                                    type="button"
                                    onClick={() => this.unfollowUser()}>Following
                                </button>
                            </div>
                            :
                            <div className='fr'>
                                <button
                                    id='follow_button'
                                    className="btn btn-primary pd5 ma2 follow_button"
                                    type="button"
                                    onClick={() => this.followUser()}>Follow
                                </button>
                            </div>
                    }
                    <div className='row'>
                        <div className='dp tc col-md-9'>
                            <img
                                className='ma2'
                                src={this.state.profile_pic}
                                alt='https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'
                                height={180}
                                width={180}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card bg-washed-blue club-follow-card">
                                <div className="card-header">
                                    <h6 className='font-weight-bold'>Clubs Followed:</h6>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        {
                                            this.state.clubs_followed.map((club) =>
                                                <li onClick={() => this.goToTeam(club.TEAM_ID)}
                                                    className="list-group-item p-1">
                                                    <h4 className="clubs-followed">{club.TEAM}</h4>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <h3 className="font-weight-bold">
                                    Username
                                </h3>
                                <h4>
                                    {this.state.user['username']}
                                </h4>
                            </div>

                            <div>
                                <h3 className="font-weight-bold profile_text">
                                    Favorite Team
                                </h3>
                                <h4>
                                    {this.state.user['favorite_team']}
                                </h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card bg-washed-blue user-follow-card">
                                <div className="card-header">
                                    <h6 className='font-weight-bold'>Users Followed:</h6>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        {
                                            this.state.users_followed.map((user) =>
                                                <li onClick={() => this.goToProfile(user.user_followed)}
                                                    className="list-group-item p-1">
                                                    <h4 className="clubs-followed">{user.user_followed}</h4>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default AnonProfile;