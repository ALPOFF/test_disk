import React from "react";
import * as axios from "axios";

class DataDisk extends React.Component {

    /*   constructor(props) {
           super(props); //если только это то не пишем
       }*/

    componentDidMount() {
        axios.get("https://cloud-api.yandex.net/v1/disk/resources?path=%2F", { headers: { Authorization: 'OAuth AgAAAAAzg5r5AAXoL7C1lxEDHEHuq7g1PyL4_ls\n' }}).then(response => {
            this.props.setUsers(response.data._embedded.items);
            console.log(response.data._embedded)
        });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            {u.type === "dir"
                            ? "FOLDER - "+u.name
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
