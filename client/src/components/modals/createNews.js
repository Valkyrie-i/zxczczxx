import React, {useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import {Context} from "../../index";

const CreateNews = ({show, onHide}) => {

    const{news} = useContext(Context)

    return (
        <Modal
            show ={show}
            onHide ={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новость
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                    placeholder={"Введите заголов новости"}
                    />
                    <Form.Control
                        placeholder={"Введите описание новости"}
                    />
                    <Form.Control
                        type="file"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateNews;