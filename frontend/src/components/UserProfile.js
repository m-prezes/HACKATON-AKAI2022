import { Container, Row } from 'react-bootstrap';
import './UserProfile.css'
import default_user from '../assets/default_user.png'
import ProgressBar from 'react-bootstrap/ProgressBar';


function UserProfile(props) {
    return (
       <Container>
        <Row>
            <Container className="center user_icon_container" fluid>
                <div>
                    <img src={default_user} alt="user_icon" className='user-image'/>
                    <div className='user-coins center'>2137 $</div>
                    <div className='user-level center'>1</div>
                </div>
            </Container>
            <Container fluid className="center">
                <ProgressBar animated variant="warning" now={40} className="points-progress-bar"/>
            </Container>
                
        </Row>
        <Row>

        </Row>
       </Container>
    )
}

export default UserProfile;