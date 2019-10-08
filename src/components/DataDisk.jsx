import React from "react";
import * as axios from "axios";
import {Link, NavLink} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";



class DataDisk extends React.Component {

    /*   constructor(props) {
           super(props); //если только это то не пишем
       }*/



    render() {
        const { match, location, history } = this.props;
        return <div>
            {this.props.location.pathname}
            {
                this.props.profile.map(u => <div key={u.id}>
                    <span>
                        <div>
                            {u.type === "dir"
                            ? <Link to={  '/' + u.name}>FOLDER-{u.name}</Link>
                            : u.name
                        }
                        </div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default DataDisk;
