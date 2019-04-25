import React from 'react';
import {Component} from 'react';
import ProfileService from "../../services/ProfileService";

import pro from './pro.png';
import casual from './casual.jpg';
import admin from './admin.jpg';
import './Profile.css';

class AnonProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            edit_mode: false,
            password: '',
            first_name: '',
            last_name: '',
            profile_pic: ''
        };
        this.profileService = new ProfileService();
    }




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
                            {/*{

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
                            }*/}
                            {/*{
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
                            }*/}
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

                    <div>
                        <h3 className="font-weight-bold">
                            Favorite Team
                        </h3>
                        <h4>
                            {this.state.user['favorite_team']}
                        </h4>
                    </div>
                </div>
            </div>

        )
    }
}

export default AnonProfile;