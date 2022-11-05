import { Container, Row, Badge } from 'react-bootstrap';
import './UserProfile.css'
import userImage from '../assets/avatar.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import goldMedal from '../assets/gold-medal.png';
import coinsImage from '../assets/coins-image.png'

function UserProfile(props) {
    return (
       <Container>
        <Row>
            <Container className="center user_icon_container" fluid>
                <div>
                    <img src={userImage} alt="user_icon" className='user-image'/>
                        <Badge bg="warning" text="dark" className='user-coins center'>
                            <img src={coinsImage} className="coins-image"/>
                            2137
                        </Badge>
                    <div className='user-level center' style={{ backgroundImage: `url(${goldMedal})` }}>
                        <img src={goldMedal} className='user-level-icon'/>
                    </div>
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