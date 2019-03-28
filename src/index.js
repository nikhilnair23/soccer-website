import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'popper.js/dist/popper'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/css/Soccer.css'
import Soccer from "./components/Soccer";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import 'tachyons';

ReactDOM.render(
    <div className="socc-background">
        <Router>
        <Soccer/>
        </Router>
    </div>,
    document.getElementById("root")

);