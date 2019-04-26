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
            users_followed: []
        };
        this.profileService = new ProfileService();
        this.userService = new UserService();
        this.userService.is_logged_in().then(response => {
            if (response.data !== "NOT_LOGGED_IN") {
                this.setState({
                                  loggedIn: true,
                                  loggedInUser: response.data,
                                  profile_pic: 'https://robohash.org/' + response.data.username
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
                    clubs_followed:response.data
                })
            })
    }


    goHome = () =>
        this.props.history.push('/');

    goToUsers = () =>
        this.props.history.push('/users');

    followUser = () => {
        if (this.state.loggedIn === false) {
            alert("You must be signed in to follow.")
        }
        else {
            this.profileService.follow(this.state.loggedInUser.username, this.state.user.username)
                .then(
                    document.getElementById("follow_button").innerText = "Following",
                    document.getElementById("follow_button").classList.remove("btn-primary"),
                    document.getElementById("follow_button").classList.add("btn-success")
                )
        }
    };

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
                    <div className='fr'>
                        <button
                            id='follow_button'
                            className="btn btn-primary pd5 ma2 follow_button"
                            type="button"
                            onClick={() => this.followUser()}>Follow
                        </button>
                    </div>
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
                                    List of Clubs Followed:
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        {
                                            this.state.clubs_followed.map((club)=>
                                                <li className="list-group-item p-1">
                                                    <h4>{club.TEAM}</h4>
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
                                <h3 className="font-weight-bold">
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
                                    List of Users Followed:
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        {
                                            this.state.users_followed.map((user) =>
                                                                              <li className="list-group-item-info">
                                                                                  <h4>{user.user_followed}</h4>
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