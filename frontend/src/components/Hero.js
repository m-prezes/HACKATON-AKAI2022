import './Hero.css'
import UserProfile from './UserProfile';
import {Row, Col, Container} from "react-bootstrap"

function Hero(props) {
    return (
        <Container fluid className='hero'>
           <Row>
                <Col md={4}>fsdf</Col>
                <Col md={4}>
                    <UserProfile />
                </Col>
                <Col md={4}>fsdf</Col>
           </Row>
        </Container>
    )
}

export default Hero;