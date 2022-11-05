import './DayStrike.css'
import {Row, Col, Container} from "react-bootstrap"

function DayStrike({day, isChecked}) {
    return (
       <Col md={2} className="center">
            <div fluid className>
                <Container className='center day-string'>{day}</Container> 
                <Container >
                    <div className={`center day-strike-checkbox ${isChecked ? 'is-checked': ''}`}></div>
                </Container>
            </div>
       </Col>
    )
}

export default DayStrike;