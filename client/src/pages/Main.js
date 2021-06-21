import React from 'react';
import {Container, Row, Col} from "react-bootstrap";


import NewsList from "../components/NewsList";


const Main = () => {
    return (
        <Container>
            <Row>
               <Col md={12}>
                    <NewsList/>
               </Col>
            </Row>
        </Container>
    );
};

export default Main;