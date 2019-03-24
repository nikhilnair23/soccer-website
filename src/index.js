import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js/dist/popper'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/css/Soccer.css'
import Soccer from "./components/Soccer";
import 'tachyons';

ReactDOM.render(
    <div className="socc-background">
        <Soccer/>
    </div>,
    document.getElementById("root")

);