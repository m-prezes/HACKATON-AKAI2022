import './Ranking.css'
import {Row, Col, Container} from "react-bootstrap"
import left_arrow from "../assets/left-arrow.png"
import right_arrow from "../assets/right-arrow.png"
import sampleRankingInfo from "../sample_data/sampleRankingInfo"
import sampleRankingInfo2 from '../sample_data/sampleRankingInfo2'
import sampleUserInfo from "../sample_data/sampleUserInfo"
import { useState } from 'react'

function Ranking(props) {

    const [flag, setFlag] = useState(false);
    const [rankInfo, setRankInfo] = useState(sampleRankingInfo);

    const handleClick = () => {
        if (flag) {
            setRankInfo(sampleRankingInfo2);
        } else {
            setRankInfo(sampleRankingInfo);
        }
        setFlag(!flag);
    }

    return (
        <Container className='ranking-container center'>
            <Container fluid className='ranking'>
                <div className='ranking-rows'>
                        {rankInfo.map((row) => (
                            <Container fluid>
                                <Row className={`ranking-row ${sampleUserInfo.name === row.name ? 'is-user' : ''}`}>
                                    <Col md={2} className='center'>{row.rank}</Col>
                                    <Col md={8} className='center'>{row.name}</Col>
                                    <Col md={2} className='row-points center'>{row.points}</Col>
                                </Row>
                            </Container>
                        ))}

                </div>
                <Container className="ranking-group">
                    <Row>
                        <Col md={3} className="center">
                            <div className="arrow-container">
                                <img src={left_arrow} alt='' className='arrow' onClick={handleClick}/>
                            </div>
                        </Col>
                        <Col md={6} className="center group-container">
                            {flag 
                            ? 'Hackaton AKAI2022'
                            : 'Studenciaki'}
                            
                        </Col>
                        <Col md={3} className="center">
                            <div className="arrow-container">
                                <img src={right_arrow} alt='' className='arrow' onClick={handleClick}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}

export default Ranking;