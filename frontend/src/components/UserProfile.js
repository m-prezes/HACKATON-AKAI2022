import { Container, Row, Button } from 'react-bootstrap';
import './UserProfile.css'
import userImage from '../assets/avatar.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import goldMedal from '../assets/gold-medal.png';
import coinsImage from '../assets/coins-image.png'

function UserProfile({handleMainViewState, coins}) {

    return (
       <Container>
        <Row>
            <Container className="center user_icon_container" fluid>
                <div>
                    <img src={userImage} alt="user_icon" className='user-image'/>
                        <Button variant='warning' className='user-coins center' value='shop' onClick={(e) => handleMainViewState(e)}>
                            {coins}
                            <img src={coinsImage} className="coins-image"/>
                        </Button>
                    <button className='user-level center' value='badge' onClick={(e) => handleMainViewState(e)} style={{ backgroundImage: `url(${goldMedal})` }}>
                        <img src={goldMedal} className='user-level-icon'/>
                    </button>
                </div>
            </Container>
            <Container fluid className="center progress-bar-container">
                <ProgressBar animated variant="warning" now={40} className="points-progress-bar"/>
                <p className='level-tag'>Level 5</p>
            </Container>
                
        </Row>
        <Row>

        </Row>
       </Container>
    )
}

export default UserProfile;