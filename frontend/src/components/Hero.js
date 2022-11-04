import { Row, Col } from 'react-bootstrap';
import './Hero.css'

function Hero(props) {
    return (
        <div className='hero'>
            <Row>
                <Col className="md-6">Hejka</Col>
                <Col className="md-6">Joł</Col>
            </Row>
        </div>
    )
}

export default Hero;