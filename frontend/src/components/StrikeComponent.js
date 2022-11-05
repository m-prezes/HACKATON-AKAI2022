import './StrikeComponent.css'
import DayStrike from './DayStrike';
import {Row, Col, Container} from "react-bootstrap"
import level_strike from '../assets/level_strike.png'

function StrikeComponent(props) {
    const days = [["MON",true],["TUE",true], ["WED",false], ["TH",false], ["FRI",false]]

    
    return (
        <Container className='strike-component-container'>
            <Container fluid className='strike-component'>
                <Container fluid className='center'>
                    <div className='level-icon-container'>
                        <img src={level_strike} alt="level" className='level'/>
                    </div>
                </Container>
                <Container>
                    <Row className="center day-strike-container">
                        <Col md={1}/>
                            {days.map( ([day, isChecked]) =>(
                                <DayStrike key={day} day={day} isChecked={isChecked}/>
                            ))}
                        <Col md={1}/>
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}

export default StrikeComponent;