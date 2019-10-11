import React from "react";
import {connect} from "react-redux";
import {setFldPath} from "../../redux/actions";
import DataDisk from "../DataDisk/DataDisk";
import * as axios from "axios";
import {withRouter} from "react-router-dom";
import {token_value} from "../../token_value"
import Navbar from "../Navbar/Navbar";

class DataDiskContainer extends React.Component {

    componentDidMount() {
        let fldpath = this.props.location.pathname.substring(1);
        axios.get('https://cloud-api.yandex.net/v1/disk/resources?path=/' + fldpath, {headers: {Authorization: 'OAuth '+token_value}}).then(response => {
            this.props.setFldPath(response.data._embedded.items);
            console.log(response.data._embedded)

        });
    }

    render() {

        const {location} = this.props;
        let lct = location.pathname;
        return (
            <div>
                <div>
                    <div>
                        <Navbar {...this.props} profile={this.props.data} lct={lct}/>
                    </div>
                </div>
                <DataDisk {...this.props} profile={this.props.data} key={this.props.location.pathname}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.diskdata.data
    }
}

let WithUrlDataContainerComponent = withRouter(DataDiskContainer);

export default connect(mapStateToProps, {setFldPath})(WithUrlDataContainerComponent);
