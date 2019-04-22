import React from 'react';
import {Component} from 'react';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            edit_mode: false,
            password: this.props.user['password'],
            first_name: this.props.user['first_name'],
            last_name: this.props.user['last_name'],
            profile_pic: "http://robohash.org/" + this.props.user['username']
        }
    }

    updateUser = () => {
        //console.log(this.state)
        const pw = this.state.password;
        const fn = this.state.first_name;
        const ln = this.state.last_name;

        fetch('http://localhost:5000/profile/' + this.state.user['username'], {
                  method: 'PUT',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({
                                           password: pw,
                                           first_name: fn,
                                           last_name: ln
                                       })
              }
        ).then(
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
                password: this.props.user['password'],
                first_name: this.props.user['first_name'],
                last_name: this.props.user['last_name'],
                edit_mode: false
            }
        )
    };

    deleteUser = () => {
        alert("Sorry to see you go, " + this.state.user['username']);
        fetch('http://localhost:5000/profile/' + this.state.user['username'], {
            method: 'delete',
            headers: {
                'content-type': 'application/json'   }
        }).then(this.props.onRouteChange("signin"))
    };

    render() {
        return (

            <div className='container-fluid tc'>
                <div
                    className='tc bg-washed-yellow dib ma2 br3 pa1 shadow-5 w-33'>
                    <div>
                        <button
                            className="btn btn-warning pd5 ma2 home_button"
                            type="button"
                            onClick={() => this.props.onRouteChange('home')}>Home Page
                        </button>
                    </div>
                    <div className='dp tc'>
                        <img
                            className='ma2'
                            src={this.state.profile_pic}
                            alt='https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'
                            height={180}
                            width={180}/>
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
                            <div>
                                <h3 className="font-weight-bold">
                                    Password
                                </h3>
                                <h4>
                                    {this.state.password}
                                </h4>
                            </div>
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
                                {/*<h4>*/}
                                {/*{this.state.user['password']}*/}
                                {/*</h4>*/}
                                <input type='text'
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

                        this.state.user['isAdmin'] === 1
                        ?
                        <button className='btn btn-primary ma2'
                                onClick={() => this.props.onRouteChange('users')}>
                            User list
                        </button>
                        :
                        <p>
                            You are a normal user.
                        </p>
                    }
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