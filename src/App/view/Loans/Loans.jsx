import React from 'react'
import './index.css'
import auto from "../../../assets/img/loans/auto.jpg"
import gold from "../../../assets/img/loans/gold.jpg"
import appliances from "../../../assets/img/loans/appliances.jpg"
import { Col, Container, Row } from 'react-bootstrap'


function Loans() {
    return (
        <div className='loans-general'>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Loans
