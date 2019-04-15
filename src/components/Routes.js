import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "../containers/MainPage";
import SearchResults from "./Search/SearchResults";
import SearchResultItem from "./Search/SearchResultItem"
import React from "react";
import Highlights from "./Highlights";

const Routes = () => {
    return (
        <div className={"socc-background"}>
            <Router>
                <div className={"container-fluid"} id="navbar-container">
                    <Route path={"/"} exact
                           render={() => <MainPage/>}/>
                    <Route path={"/search/:searchTerm"} exact
                           component={SearchResults}/>
                    <Route path={"/searchItem"} exact component={SearchResultItem}/>
                    <Route path={"/highlights"} exact component={Highlights}/>
                </div>
            </Router>
        </div>
    )
}

export default Routes