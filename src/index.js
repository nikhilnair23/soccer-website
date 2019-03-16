import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Soccer from "./components/Soccer";

ReactDOM.render(
    <div className="wbdv-root">
        {/*<Provider store={store}>
            <WidgetListContainer/>
        </Provider>*/}
        <Soccer/>
    </div>,
    document.getElementById("root")

);