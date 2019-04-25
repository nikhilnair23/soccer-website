import React from 'react';
import {Component} from 'react';
import './Register.css'
import {withRouter} from 'react-router';
import TeamService from "../../services/TeamService";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            favorite_team: '',
            isAdmin: 0,
            isPro: 0,
            teams: []
        };
        this.teamService = new TeamService();
    }

    componentDidMount() {
        this.teamService.getAllTeams()
            .then(
                res => this.setState(
                    {
                        teams: res.data
                    }
                )
            )
    }

    onUsernameChange = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    };

    onPasswordChange = (event) => {
        this.setState(
            {
                password: event.target.value
            }
        )
    };

    onFirstNameChange = (event) => {
        this.setState(
            {
                first_name: event.target.value
            }
        )
    };

    onLastNameChange = (event) => {
        this.setState(
            {
                last_name: event.target.value
            }
        )
    };

    onRegister = () => {
        //this.props.onRouteChange('home');
        let u = {
            username: this.state.username,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            favorite_team: this.state.favorite_team,
            isAdmin: this.state.isAdmin,
            ban_status: 0,
            isPro: this.state.isPro
        };


        fetch('http://localhost:5000/register', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                                     username: this.state.username,
                                     password: this.state.password,
                                     first_name: this.state.first_name,
                                     last_name: this.state.last_name,
                                     favorite_team: 'lfc',
                                     isAdmin: this.state.isAdmin,
                                     ban_status: 0,
                                     isPro: this.state.isPro
                                 })
        })
            .then(response => response.json())
            .then(
                res => {
                    if (res.length === 0) {
                        document.getElementById("username_input_register").value = '';
                        document.getElementById("password_input_register").value = '';
                        alert('User already exists, sign in or try again.');
                    }
                    else {
                        // this.props.getUser(u);
                        this.props.history.push({
                                                    pathname: '/favouriteTeam',
                                                    state: {
                                                        user: u,
                                                        teams: this.state.teams
                                                    }
                                                })
                        // this.props.onRouteChange('favorite_team');
                    }
                    // console.log(res);
                    // debugger;
                    // this.props.onRouteChange('register');
                }
            );
    };

    onAdminChange = () => {
        if (document.getElementById("user_type").checked) {
            this.setState(
                {
                    isAdmin: 1
                }
            )
        }
        else {
            this.setState(
                {
                    isAdmin: 0
                }
            )
        }
    };

    onProChange = () => {
        if (document.getElementById("user_type").checked) {
            this.setState(
                {
                    isPro: 1
                }
            )
        }
        else {
            this.setState(
                {
                    isPro: 0
                }
            )
        }
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="register-form">
                        <input type="text" placeholder="name"/>
                        <input type="password" placeholder="password"/>
                        <input type="text" placeholder="email address"/>
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form className="login-form">
                        <input id="username_input_register"
                               type="text"
                               placeholder="username"
                               onChange={this.onUsernameChange}/>
                        <input id="password_input_register"
                               type="password"
                               placeholder="password"
                               onChange={this.onPasswordChange}
                        />
                        <input type="text"
                               placeholder="first name"
                               onChange={this.onFirstNameChange}/>
                        <input type="text"
                               placeholder="last name"
                               onChange={this.onLastNameChange}/>
                        <input id="user_type"
                               type="checkbox"
                               name="user_type"
                               value="#"
                               onClick={this.onProChange}
                        />Are you a Pro user?
                        <button
                            type="button"
                            onClick={this.onRegister}>
                            register
                        </button>
                        <p className="message">Already registered?
                            <button
                                type="button"
                                onClick={() => this.props.onRouteChange('signin')}>Sign in</button>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);