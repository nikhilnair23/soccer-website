import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Soccer from "./components/Soccer";
import 'tachyons';

ReactDOM.render(
    <div className="socc-background">
        <Soccer/>
    </div>,
    document.getElementById("root")

);