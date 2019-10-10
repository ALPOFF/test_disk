import React from 'react';
import DataDiskContainer from "./components/DataDiskContainer";
import {Route, withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";

const App = ({location}) => {
    return (
        <div>
            <Container>
                <Row>
                    <h3>Yandex Drive Files Viewer by GA TEAM</h3>
                </Row>
                <Row>
                    <Route path="/:fldpath?" component={DataDiskContainer} key={location.pathname}/>
                </Row>
            </Container>
        </div>
    );
}

export default withRouter(App);
