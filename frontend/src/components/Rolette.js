import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import RoulettePro from 'react-roulette-pro';
import './Roulette.css'
import 'react-roulette-pro/dist/index.css';

import prize1 from '../assets/shop/hat.png'
import prize2 from '../assets/shop/hat-1.png'
import prize3 from '../assets/shop/hat-2.png'
import prize4 from '../assets/shop/new-avatar.png'

import coins from '../assets/coins-image.png'

function Roulette(props) {
    const [ready, setReady] = useState(true)

    const prizes = [
    {
        image: prize1,
    },
    {
        image: prize2,
    },
    {
        image: prize3,
    },
    {
        image: prize4,
    },
    ];
    
    const winPrizeIndex = 0;
    
    const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
        .fill('_')
        .map(() => array[Math.floor(Math.random() * array.length)]),
    ];
    
    const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
    ];
    
    const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;
    
    const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id: generateId(),
    }));

  const [start, setStart] = useState(false);

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    props.handleSetUserInfo({target: {value: prizeList[winPrizeIndex].image} },'item')
    setReady(false)
  };

  return (
    <Container>
        <Container className='roulette-con'>
            <Container className='center roulette-header'>
                {ready ? "Win a prize!" : "You won..."}
            </Container>
            {ready ? (
                <>
                    <RoulettePro
                    prizes={prizeList}
                    prizeIndex={prizeIndex}
                    start={start}
                    onPrizeDefined={handlePrizeDefined}
                />
                <Container className='center roulette-start'>
                    <Button variant='warning' font='white' onClick={handleStart} className='roulette-start center'>Start (100<img src={coins} style={{width: 20}} />)</Button>
                </Container>
              </>
            ) : 
                <Container>
                    <Container className='center' style={{padding: 10}}>
                        <img src={prizeList[winPrizeIndex].image} className='won-image'/>
                    </Container>
                    <Container className='center'>
                        <Button variant='warning center try-again' onClick={()=>{setReady(true)}}>Try again</Button>    
                    </Container>

                </Container>
            }
          
        </Container>
            
    </Container>
  );
};

export default Roulette;