import React from "react";
import {connect} from "react-redux";
import {setFldPath} from "./../redux/actions";
import DataDisk from "./DataDisk";
import * as axios from "axios";
import {Link, withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {token_value} from "./../token_value"

class DataDiskContainer extends React.Component{

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    componentDidMount() {

        let fldpath = this.props.location.pathname.substring(1);
        axios.get('https://cloud-api.yandex.net/v1/disk/resources?path=/' + fldpath, {headers: {Authorization: token_value}}).then(response => {
            this.props.setFldPath(response.data._embedded.items);
            console.log(response.data._embedded)

        });
    }

    render() {
        const { match, location, history } = this.props;
        return (
            <div>
                <div>Вы находитесь: {location.pathname}</div>
                <div><Link to= {location.pathname.replace(this.props.match.url, '')}><h4>...</h4></Link></div>
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
