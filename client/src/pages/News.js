import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

const News = () => {

    const news = {id:7,title:'хуй мамин',description:'loremasdasdasdasd',img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'}

    return (
        <Container className="mt-4">
            <Row className="d-flex align-items-start justify-content-center">
                <Col md={6}>
                    <Image width={550} height={400} src={news.img}/>
                </Col>
                <Col md={6} style={{wordBreak:'break-all'}}>
                    <h2 style={{color:'#004242',fontSize:'36px'}}>{news.title}</h2>
                    <p style={{color:'#004242',fontSize:'24px'}}>{news.description}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default News;