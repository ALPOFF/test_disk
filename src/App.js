import React from 'react';
import DataDiskContainer from "./components/DataDiskContainer";

//import './App.css';

function App(props) {

    let getLink = () => {
        alert(1)
    }

    return (
        <div className="App">
            <div>
                <h4>Вставьте ссылку на диск</h4>
                <input type="text" />
                <button onClick={getLink}>View</button>
                <DataDiskContainer />
            </div>
        </div>
    );
}

export default App;
