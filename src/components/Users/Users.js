import React from 'react';
import {Component} from 'react';
import './Users.css';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(res => {
                this.setState(
                {
                    users: res.data
                }
            )})
    }

    componentDidUpdate() {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(res => {
                this.setState(
                    {
                        users: res.data
                    }
                )
            })
    }

    makeAdmin = (username) => {
        fetch('http://localhost:5000/admin/' + username, {
                  method: 'PUT',
                  headers: {'Content-Type': 'application/json'}
              }
        ).then(
            this.setState(

            )
        )
    };

    banUser = (username) => {
        fetch('http://localhost:5000/ban/' + username, {
                  method: 'PUT',
                  headers: {'Content-Type': 'application/json'}
              }
        ).then(
            this.setState(

            )
        )
    };

    unBanUser = (username) => {
        fetch('http://localhost:5000/unban/' + username, {
                  method: 'PUT',
                  headers: {'Content-Type': 'application/json'}
              }
        ).then(
            this.setState(

            )
        )
    };

    render() {

        console.log(this.state.users)
        return (
            this.state.users.length === 0
            ?
            <div>
                <p>
                    No users to display
                </p>
            </div>
            :
            <div className='container-fluid tc'>
                <table className="table bg-moon-gray table-striped css-serial tc pa3">
                    <thead className='bg-light'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Favorite team</th>
                        <th scope="col">Admin rights</th>
                        <th scope="col">Ban status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr className='tc'>
                                    <td></td>
                                    <th scope="row">{user['username']}</th>
                                    <td>{user['first_name']}</td>
                                    <td>{user['last_name']}</td>
                                    <td>{user['favorite_team']}</td>
                                    {
                                        user['isAdmin'] === 0 && user['ban_status'] === 0
                                        ?
                                        <td>
                                            <button
                                                id='admin_button'
                                                onClick={() => this.makeAdmin(user['username'])}
                                                className='btn-primary'>
                                                Make Admin
                                            </button>
                                        </td>
                                        :
                                        user['isAdmin'] === 1
                                        ?
                                        <td>
                                            <button className='btn-success'>
                                                Admin
                                            </button>
                                        </td>
                                        :
                                        <td>
                                            <button
                                                className='btn-danger'>
                                                Banned
                                            </button>
                                        </td>
                                    }
                                    {
                                        user['ban_status'] === 0 && user['isAdmin'] === 0
                                        ?
                                        <td>
                                            <button
                                                id='ban_button'
                                                onClick={() => this.banUser(user['username'])}
                                                className='btn-warning'>
                                                Ban user
                                            </button>
                                        </td>
                                        :
                                        user['isAdmin'] === 0
                                        ?
                                        <td>
                                            <button
                                                onClick={() => this.unBanUser(user['username'])}
                                                className='btn-danger'>
                                                Banned
                                            </button>
                                        </td>
                                        :
                                        <td>
                                            <button className='btn-success'>
                                                Admin
                                            </button>
                                        </td>
                                    }
                                </tr>
                        )
                    }
                    </tbody>
                </table>
                <details className='fl tl bg-lightest-blue pa3 ma3'>
                    <summary className='bg-light-blue'>
                        Click here to view instructions
                        <span className="caret">&#9660;</span>
                    </summary>
                    <ul>
                        <li>
                            Click on "Make Admin" to make a user an admin.
                        </li>
                        <li>
                            Click on "Ban user" to ban a user.
                        </li>
                        <li>
                            Click on "Banned" to un-ban a user.
                        </li>
                        <li>
                            A banned user cannot be made an admin. If a banned user is un-banned, they
                            can be made an admin.
                        </li>
                        <li>
                            An admin cannot revoke admin rights once they make another user an admin.
                            Hence, be cautious if you make someone an admin as you cannot reverse it
                            on the front end.
                        </li>
                    </ul>
                </details>
            </div>
        )
    }
}

export default Users;