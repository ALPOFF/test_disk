import React from "react";
import {Link} from "react-router-dom";
import styles from "./DataDisk.module.css"

class DataDisk extends React.Component {

    render() {
        return <div>
            {
                this.props.data.map(u => <div className={styles.item} key={u.id}>
                    <span>
                        <div>
                            {u.type === "dir"
                            ? <Link to={ u.path.substring(5) }>
                                        <img src="https://opengameart.org/sites/default/files/Flat%20Folder%20icon.png" alt="" height={15}/>
                                    {u.name}</Link>
                            : <div>
                                    <img src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/File-512.png" alt="" height={15}/>
                                    {u.name}</div>
                        }
                        </div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default DataDisk;
