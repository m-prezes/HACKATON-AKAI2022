import './DayStrike.css'
import { Col, Container} from "react-bootstrap"

function DayStrike({day, isChecked, isToday}) {
    return (
       <Col md={2} className="center">
            <div fluid className>
                <Container className='center day-string'>{day}</Container> 
                <Container >
                    <div className={`center day-strike-checkbox ${isChecked ? 'is-checked': isToday ? "is-today" : ''}`}></div>
                </Container>
            </div>
       </Col>
    )
}

export default DayStrike;