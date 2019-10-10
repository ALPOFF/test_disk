import React from 'react';
import DataDiskContainer from "./components/DataDiskContainer/DataDiskContainer";
import {Route, withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

const App = ({location}) => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto p-3">
                        <h3>Yandex Drive Files Viewer by GA TEAM</h3>
                    </Col>
                </Row>

                        <Route path="/:fldpath?" component={DataDiskContainer} key={location.pathname}/>


            </Container>
        </div>
    );
}

export default withRouter(App);
