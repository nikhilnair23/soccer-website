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
    }

    goToFixtures = () => {
        return (
            this.props.history.push('/fixtures')
        )
    }

    goToLeagues = () => {
        return (
            this.props.history.push('/leagues')
        )
    }

    goToSearch = () =>
        this.props.history.push('/search/' + this.state.searchText);

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

    signOut = () =>
        this.userService.sign_out().then((response) => {
            debugger;
                return(this.props.history.push({
                    pathname:'/',
                    state:{
                        signedOut:true
                    }
                }))
            }
        )

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
            <nav className="navbar navbar-expand bg-black-90">
                <div className="row container-fluid">
                    <div className="col-2">
                        <button onClick={this.goHome}
                                className="btn">
                            <img  className="img rounded"
                                src={logo}
                                 height="90px"
                                  width="auto"
                                /*className="img-thumbnail"*//>
                            {/*<h3 className="float-left pt-2 mr-1 mt-2 font-italic font-weight-bolder text-danger">FOOTBALL</h3>*/}
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
                                    {/*onClick={() => this.props.onRouteChange('fixtures')}>*/}
                                    Fixtures
                                </button>
                            </li>
                            <li className="nav-item" id="">
                                <button
                                    className={"btn text-white"}
                                    /*onClick={() => self.props.onRouteChange('standings')}*/
                                    onClick={() => this.goToLeagues()}
                                >
                                    Leagues
                                </button>
                            </li>
                            <li className="nav-item" id="">
                                <button className={"btn text-white"}>Scores</button>
                            </li>
                            {/*<li className="nav-item mr-2" id="">
                                <button className={"btn text-white"}>Highlights</button>
                            </li>*/}
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
            </nav>
        );
    }
}

export default withRouter(Navigation)

/*
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Expand at sm</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown03">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search">
        </form>
      </div>
    </nav>
 */