import { Button } from 'react-bootstrap';
import './Return.css';
import returnImage from '../assets/return.png'

function Return({handleMainViewState}) {
    return (
       <Button variant='warning' className='return center' onClick={(e) => handleMainViewState(e)} value='habits'>
         <img src={returnImage} className='return-image' />
       </Button>
    )
}

export default Return;
