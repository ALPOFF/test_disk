import React from "react";
import * as axios from "axios";
import {Link, NavLink} from "react-router-dom";



class DataDisk extends React.Component {

    /*   constructor(props) {
           super(props); //если только это то не пишем
       }*/



    render() {
        const { match, location, history } = this.props;
        return <div>
            <div>You are now at {location.pathname}</div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            {u.type === "dir"
                            ? <NavLink to={  '/' + u.name}>FOLDER-{u.name}</NavLink>
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
