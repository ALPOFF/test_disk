import React from 'react';
import DataDiskContainer from "./components/DataDiskContainer";
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";

const App = ({location}) => {
debugger
    return (
            <div>
                <h3>YFM</h3>
                <Route path="/:fldpath?" component={DataDiskContainer} key={location.pathname} />;
            </div>
    );
}

export default withRouter(App);
