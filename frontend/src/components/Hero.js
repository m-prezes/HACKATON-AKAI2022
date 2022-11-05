import './Hero.css'
import UserProfile from './UserProfile';
import StrikeComponent from './StrikeComponent';
import Ranking from './Ranking';
import {Row, Col, Container} from "react-bootstrap"

function Hero(props) {
    return (
        <Container fluid className='hero'>
           <Row>
                <Col md={4} className='center'>
                    <StrikeComponent />
                </Col>
                <Col md={4}>
                    <UserProfile />
                </Col>
                <Col md={4} className='center'>
                    <Ranking />
                </Col>
           </Row>
        </Container>
    )
}

export default Hero;