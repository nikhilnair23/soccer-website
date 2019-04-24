import React from "react";
import './Navigation.css'
import SearchService from "../../services/SearchService";
import UserService from "../../services/UserService"
import {Redirect} from "react-router-dom";
import {withRouter} from 'react-router';
import logo from '../../img/Logo.png'

let self

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        self = this;
        this.state = {
            searchText: "",
            navigate: false,
            articles: []
        };
        //console.log(this.props);
        this.searchService = new SearchService();
        this.userService = new UserService();
    }

    titleChanged = (event) => {
        this.setState(
            {
                searchText: event.target.value
            }
        )
    };

    goHome = () =>
        this.props.history.push('/')

    goToLogin = () =>
        this.props.history.push('/login')

    goToTeams = () => {
        debugger;
        return (
            this.props.history.push('/teams')
        )
    };

    goToFixtures = () => {
        return (
            this.props.history.push({
                                        pathname: '/fixtures',
                                        state: {
                                            user: this.props.user
                                        }
                                    })
        )
    };

    goToLeagues = () => {
        return (
            this.props.history.push({
                                        pathname: '/leagues',
                                        state: {
                                            user: this.props.user
                                        }
                                    })
        )
    };

    goToSearch = () =>{
        debugger;
        if(this.state.searchText===""){
            return(this.props.history.push('/search/soccer'))
        }
        else{
            return(this.props.history.push('/search/' + this.state.searchText))
        }
    }


    goToProfile = () => {

        debugger;
        return (
            this.props.history.push({
                                        pathname: '/profile',
                                        state: {
                                            user: this.props.user
                                        }
                                    })
        )
    }

    search = () => {
        self.setState({
                          navigate: true
                      })
    }

    signOut = () => {
        debugger;
        this.userService.sign_out().then((response) => {
                debugger;
                return (this.props.history.push({
                    pathname: '/',
                    state: {
                        signedOut: true
                    }
                }))
            }
        )
    }

    render() {
        if (this.state.navigate === true) {
            debugger;
            return (
                <Redirect to={{
                    pathname: '/search/' + this.state.searchText,
                    /*state: {articles: this.state.articles}*/
                }}/>)
        }
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-black">
                <div className="navbar-container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExample03"
                            aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button className="btn"
                            onClick={this.goHome}>
                        <img className="img rounded"
                             src={logo}
                             height="80px"
                             width="auto"
                        />
                    </button>
                </div>
                {/*<a className="navbar-brand text-white" href="#">Expand at sm</a>*/}
                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="nav nav-pills mr-auto">
                        <li className="nav-item">
                            <a onClick={this.goToTeams}
                               href='#'
                               className="nav-link font-weight-bold text-white">
                                Teams <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.goToLeagues}
                               className="nav-link font-weight-bold text-white" href="#">
                                Leagues <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.goToFixtures}
                               className="nav-link font-weight-bold text-white" href="#">
                                Fixtures <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold text-white" href="#">Scores <span
                                className="sr-only">(current)</span></a>
                        </li>
                        {/*<li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown03"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown03">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>*/}
                    </ul>
                    <form className="form-inline">
                        <div className="nav-item dropdown mr-2">
                            <a className="nav-link fa fa-user-circle fa-2x" href="http://example.com" id="dropdown03"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                            <ul className="dropdown-menu pull-left" aria-labelledby="dropdown03">
                                {this.props.loggedIn === true &&
                                <div>
                                    <li className="dropdown-item text-center">Welcome
                                        back {this.props.user.user}</li>
                                    <li className="dropdown-item text-center" href="#">
                                        <button onClick={this.goToProfile}
                                                className="btn btn-success">Profile
                                        </button>
                                    </li>
                                    <li className="dropdown-item text-center" href="#">
                                        <button onClick={this.signOut}
                                                className="btn btn-danger">Sign Out
                                        </button>
                                    </li>
                                </div>
                                }
                                {this.props.loggedIn === false &&
                                <div>
                                    <li className="dropdown-item text-center" href="#">
                                        <button onClick={this.goToLogin}
                                                className="btn btn-primary">Sign In
                                        </button>
                                    </li>
                                </div>
                                }

                                {/*<li className="dropdown-item text-center" href="#">
                                    <button onClick={this.goToLogin}
                                            className="btn btn-primary">Sign In
                                    </button>
                                </li>*/}
                            </ul>
                        </div>
                        <input onChange={this.titleChanged}
                            className="form-control mr-2" type="text" placeholder="Search"/>
                        <button
                            onClick={() => this.goToSearch()}
                            className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>

                    </form>
                </div>
            </nav>
        )
            ;
    }
}

export default withRouter(Navigation)

/*
<nav className="navbar navbar-expand-sm navbar-dark bg-black">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03"
                        aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand text-white" href="#">Expand at sm</a>
                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link font-weight-bold" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown03"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown03">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-md-0">
                        <input className="form-control" type="text" placeholder="Search"/>
                    </form>
                </div>
            </nav> */


/*<nav className="navbar navbar-expand bg-black-90">
    <div className="row container-fluid">
    <div className="col-2">
    <button onClick={this.goHome}
className="btn">
    <img className="img rounded"
src={logo}
height="90px"
width="auto"
className="img"/>
    {/!*<h3 className="float-left pt-2 mr-1 mt-2 font-italic font-weight-bolder text-danger">FOOTBALL</h3>*!/}

</button>
</div>
<div className="col-8 nav-container">
    <ul className="nav nav-pills bg-black p-2">
        <li className="nav-item" id="">
            <button onClick={() => this.goToTeams()}
                    className={"btn text-white"}>Teams
            </button>
        </li>
        <li className="nav-item" id="">
            <button
                className={"btn text-white"}
                onClick={() => this.goToFixtures()}>
                Fixtures
            </button>
        </li>
        <li className="nav-item" id="">
            <button
                className={"btn text-white"}
                onClick={() => self.props.onRouteChange('standings')}
                onClick={() => this.goToLeagues()}
            >
                Leagues
            </button>
        </li>
        <li className="nav-item" id="">
            <button className={"btn text-white"}>Scores</button>
        </li>
        <li className="nav-item ml-2" id="wrap">
            <div className="search">
                <input onChange={this.titleChanged}
                       type="text" id="searchTerm" className="form-control-sm mr-2"
                       placeholder="What are you looking for?"/>
                <button
                    onClick={() => this.search()}
                    className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </li>
    </ul>
</div>
<div className="col-2">
{
    this.props.loggedIn === true
    ?
    <div>
        <div className='inline-block'>
            <li className="nav-item" id="signout_button">
                <button className="btn text-white"
                        onClick={() => this.signOut()}
                >Sign out
                </button>
            </li>
        </div>

        <div className='inline-flex'>
            <li className="nav-item" id="profile_button">
                <button className="btn btn-primary text-white"
                        onClick={() => this.goToProfile()}
                >Profile
                </button>
            </li>
        </div>

    </div>

    :
    <li className="nav-item" id="signout_button">
        <button className="btn text-white"
                onClick={() => this.goToLogin()}
        >Sign in
        </button>
    </li>
}
</div>
</div>
</nav>*/

