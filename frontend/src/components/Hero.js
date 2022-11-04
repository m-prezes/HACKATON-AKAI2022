import { Row, Col } from 'react-bootstrap';
import './Hero.css'

function Hero(props) {
    return (
        <div className='hero'>
            <Row>
                <Col className="md-4">Hejka</Col>
                <Col className="md-4">Hejka</Col>
                <Col className="md-4">Joł</Col>
            </Row>
        </div>
    )
}

export default Hero;