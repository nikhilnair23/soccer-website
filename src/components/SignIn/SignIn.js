import React from 'react';
import {Component} from 'react';
import {withRouter} from 'react-router';
import UserService from '../../services/UserService'
import './SignIn.css'

class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isAdmin: ''
        };
        this.userService = new UserService();
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

    onSignIn = () => {
        return(
        fetch('https://soccer-website-server-sp19.herokuapp.com/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        //.then(response => response.json())
            .then(res => {
                if (res.status === 400) {
                    document.getElementById("username_input_login").value = '';
                    document.getElementById("password_input_login").value = '';
                    alert('Invalid credentials, try again');
                }
                else {
                    //console.log(res[0]['username']);
                    // this.props.getUser(res[0]);
                    this.props.history.push('/');
                    // this.props.onRouteChange('home');
                }
            })
    )
    }

    onAdminChange = () => {
        if (document.getElementById("user_type").checked) {
            this.setState(
                {
                    user_type: 'admin'
                }
            )
        }
        else {
            this.setState(
                {
                    user_type: 'normal'
                }
            )
        }
    };

    goToRegister = () =>
        this.props.history.push('/register')

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
                        <input id="username_input_login"
                               type="text"
                               placeholder="username"
                               onChange={this.onUsernameChange}/>
                        <input id="password_input_login"
                               type="password"
                               placeholder="password"
                               onChange={this.onPasswordChange}
                        />
                        {/*<input id="user_type"*/}
                               {/*type="checkbox"*/}
                               {/*name="user_type"*/}
                               {/*value="#"*/}
                               {/*onClick={this.onAdminChange}*/}
                        {/*/>Admin*/}
                        <button type="button" onClick={this.onSignIn}>
                            login
                        </button>
                        <p className="message">Not registered?
                            <button onClick={() => this.goToRegister()}>Register</button>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SignIn);