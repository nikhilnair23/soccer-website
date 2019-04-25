import React from 'react';
import {Component} from 'react';
import ProfileService from "../../services/ProfileService";

import pro from './pro.png';
import casual from './casual.jpg';
import admin from './admin.jpg';
import './Profile.css';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.user,
            edit_mode: false,
            password: this.props.location.state.user['password'],
            first_name: this.props.location.state.user['first_name'],
            last_name: this.props.location.state.user['last_name'],
            profile_pic: "http://robohash.org/" + this.props.location.state.user['username']
        };
        this.profileService = new ProfileService();
    }

    updateUser = () => {
        //console.log(this.state)
        const pw = this.state.password;
        const fn = this.state.first_name;
        const ln = this.state.last_name;

        this.profileService.updateProfile(this.state.user['username'], pw, fn, ln)
            .then(
                //console.log
                this.setState(
                    {
                        edit_mode: false
                    }
                )
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

    cancelUpdate = () => {
        this.setState(
            {
                password: this.props.location.state.user['password'],
                first_name: this.props.location.state.user['first_name'],
                last_name: this.props.location.state.user['last_name'],
                edit_mode: false
            }
        )
    };

    deleteUser = () => {
        alert("Sorry to see you go, " + this.state.user['username']);
        this.profileService.deleteProfile(this.state.user['username'])
            .then(this.goHome())
    };

    goHome = () =>
        this.props.history.push('/')

    goToUsers = () =>
        this.props.history.push('/users')

    render() {
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
                    <div className='row'>
                        <div className='dp tc col-md-9'>
                            <img
                                className='ma2'
                                src={this.state.profile_pic}
                                alt='https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'
                                height={180}
                                width={180}/>
                        </div>
                        <div className='col-md-3 fr'>
                            {

                                this.state.user['isAdmin'] === 1
                                ?
                                <button className='btn btn-primary ma2'
                                        onClick={() => this.goToUsers()}>
                                    User list
                                </button>
                                :
                                <img
                                    className='ma2'
                                    src={admin}
                                    alt="Not admin"
                                    height={90}
                                    width={90}/>
                            }
                            {
                                this.state.user['isPro'] === 1
                                ?
                                <img
                                    className='ma2'
                                    src={pro}
                                    alt="Pro user"
                                    height={90}
                                    width={90}/>
                                :
                                <img
                                    className='ma2'
                                    src={casual}
                                    alt="Casual"
                                    height={80}
                                    width={150}/>
                            }
                        </div>
                    </div>



                    <div>
                        <h3 className="font-weight-bold">
                            Username
                        </h3>
                        <h4>
                            {this.state.user['username']}
                        </h4>
                    </div>
                    {
                        this.state.edit_mode === false
                        ?
                        <div>
                            {/*<div>*/}
                            {/*<h3 className="font-weight-bold">*/}
                            {/*Password*/}
                            {/*</h3>*/}
                            {/*<h4>*/}
                            {/*{this.state.password}*/}
                            {/*</h4>*/}
                            {/*</div>*/}
                            <div>
                                <h3 className="font-weight-bold">
                                    First Name
                                </h3>
                                <h4>
                                    {this.state.first_name}
                                </h4>
                            </div>
                            <div>
                                <h3 className="font-weight-bold">
                                    Last Name
                                </h3>
                                <h4>
                                    {this.state.last_name}
                                </h4>
                            </div>
                        </div>
                        :
                        <div>
                            <div>
                                <h3 className="font-weight-bold">
                                    Password
                                </h3>
                                <input type='password'
                                       onChange={this.onPasswordChange}
                                       id='password'
                                       defaultValue={this.state.user['password']}/>

                            </div>
                            <div>
                                <h3 className="font-weight-bold">
                                    First Name
                                </h3>
                                <input type='text'
                                       onChange={this.onFirstNameChange}
                                       id='first_name'
                                       defaultValue={this.state.user['first_name']}/>
                            </div>
                            <div>
                                <h3 className="font-weight-bold">
                                    Last Name
                                </h3>
                                <input type='text'
                                       onChange={this.onLastNameChange}
                                       id='last_name'
                                       defaultValue={this.state.user['last_name']}/>
                            </div>
                        </div>
                    }

                    <div>
                        <h3 className="font-weight-bold">
                            Favorite Team
                        </h3>
                        <h4>
                            {this.state.user['favorite_team']}
                        </h4>
                    </div>

                    {
                        this.state.edit_mode === false
                        ?
                        <div className='tc'>
                            <button className='btn button btn-warning ma2'
                                    onClick={() => this.setState(
                                        {
                                            edit_mode: true
                                        }
                                    )}>
                                Edit
                            </button>
                            <button className='btn button btn-danger ma2'
                                    onClick={this.deleteUser}>
                                Delete User
                            </button>
                        </div>

                        :
                        <div className='tc'>
                            <button className='btn button btn-success ma2'
                                    onClick={this.updateUser}>
                                Save
                            </button>
                            <button className='btn button btn-secondary ma2'
                                    onClick={this.cancelUpdate}>
                                Cancel
                            </button>

                        </div>

                    }


                </div>
            </div>

        )
    }
}

export default Profile;