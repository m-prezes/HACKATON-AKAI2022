import './Hero.css'
import UserProfile from './UserProfile';
import StrikeComponent from './StrikeComponent';
import Ranking from './Ranking';
import {Row, Col, Container} from "react-bootstrap"

function Hero({handleMainViewState, userInfo}) {
    return (
        <Container fluid className='hero'>
           <Row>
                <Col md={4} className='center'>
                    <StrikeComponent />
                </Col>
                <Col md={4}>
                    <UserProfile handleMainViewState={handleMainViewState} userInfo={userInfo} />
                </Col>
                <Col md={4} className='center'>
                    <Ranking />
                </Col>
           </Row>
        </Container>
    )
}

export default Hero;