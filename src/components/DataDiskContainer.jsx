import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "./../redux/actions";
import DataDisk from "./DataDisk";
import * as axios from "axios";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

let mapStateToProps = (state) => {
    return {
        users: state.diskdata.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

class DataDiskContainer extends React.Component{

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    componentDidMount() {
        let fldpath = this.props.location.pathname.substring(1);
        axios.get('https://cloud-api.yandex.net/v1/disk/resources?path=/' + fldpath, {headers: {Authorization: 'OAuth AgAAAAAzg5r5AAXoL7C1lxEDHEHuq7g1PyL4_ls\n'}}).then(response => {
            this.props.setUsers(response.data._embedded.items);
            console.log(response.data._embedded)

        });
    }

    render() {
        const { match, location, history } = this.props;

        return (
            <div>
                <div>You are now at {location.pathname}</div>
                <DataDisk {...this.props}/>
            </div>
        )
    }
}

let WithUrlDataContainerComponent = withRouter(DataDiskContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
