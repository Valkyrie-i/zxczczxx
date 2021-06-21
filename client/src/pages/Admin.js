import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateNews from "../components/modals/createNews";


const Admin = () => {
    const [newsVisible, setNewsVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-success"} onClick = {() => setNewsVisible(true)} className="mt-4 p-2">Добавить новость</Button>
            <CreateNews show={newsVisible} onHide = {() => setNewsVisible(false)}/>
        </Container>
    );
};

export default Admin;