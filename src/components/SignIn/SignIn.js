import React from 'react';
import {Component} from 'react';
import './SignIn.css'

class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user_type: ''
        };
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
        this.props.onRouteChange('home');
    };

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
                        <input type="text"
                               placeholder="username"
                               onChange={this.onUsernameChange}/>
                        <input type="password"
                               placeholder="password"
                               onChange={this.onPasswordChange}
                        />
                        <input id="user_type"
                               type="checkbox"
                               name="user_type"
                               value="#"
                               onClick={this.onAdminChange}
                        />Admin
                        <button onClick={this.onSignIn}>
                            login
                        </button>
                        <p className="message">Not registered?
                            <a href="#">Create an account</a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;