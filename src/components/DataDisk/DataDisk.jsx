import React from "react";
import {Link} from "react-router-dom";
import styles from "./DataDisk.module.css"

class DataDisk extends React.Component {

    render() {
        return (<div className={styles.folders}>
                <div className="list-group">
                    {
                        this.props.data.map(u =>
                            <div className={styles.items} key={u.id}>
                                {u.type === "dir"
                                    ? <Link className="list-group-item list-group-item-action" to={u.path.substring(5)}>
                                        <img src="https://opengameart.org/sites/default/files/Flat%20Folder%20icon.png"
                                             alt="" height={25}/>
                                        {u.name}</Link>
                                    : <div className="list-group-item list-group-item-action">
                                        <img
                                            src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/File-512.png"
                                            alt="" height={20}/>
                                        {u.name}
                                    </div>
                                }
                            </div>)
                    }
                </div>
            </div>
        )
    }
}

export default DataDisk;
