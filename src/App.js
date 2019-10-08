import React from 'react';
import DataDiskContainer from "./components/DataDiskContainer";
import {Route,Switch} from "react-router-dom";

const App = () => {

    return (
        <div className="App">
            <div>
                <h1>dfdf</h1>

                <Route path='/:fldpath?'
                       render={ () => <DataDiskContainer /> }/>

            </div>
        </div>
    );
}

export default App;
