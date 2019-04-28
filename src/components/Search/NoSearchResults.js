import React, {Component} from 'react'
import Navigation from "../Navigation/Navigation";
import SearchService from "../../services/SearchService";
import NewsCarousel from "../News/NewsCarousel";
import UserService from "../../services/UserService";

let self
export default class NoSearchResults extends Component {
    constructor(props) {
        super(props);
        self= this;
        this.state = {
            articles: [],
            navigate: false,
            user:'',
            loggedIn: false
        };
        this.searchService = new SearchService();
        this.userService = new UserService();
        this.userService.is_logged_in().then(response => {
            console.log(response.data);
            if (response.data !== "NOT_LOGGED_IN") {
                this.setState({
                    loggedIn:true,
                    user:response.data
                })
            }
        })
    }



    render() {
        return (
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation loggedIn ={this.state.loggedIn}
                                user={this.state.user}/>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-1 col-sm-1">
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-10">
                            <h2 className="mt-3 text-white text-center font-weight-bolder bg-black-90">Sorry no results were found. Please try a different search query</h2>
                    </div>
                    <div className="col-lg-2 col-md-1 col-sm-1">
                    </div>
                </div>
            </div>

        );
    }

}