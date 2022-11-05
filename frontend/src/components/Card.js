import Button from 'react-bootstrap/Button';
import './Card.css'

function ShopCard(props) {
  return (
    // <Card className='card-style'>
    //     <div className='xd'>
    //   <Card.Img className='card-img-top' variant="top" src={props.src} style={{width: '100%'}}/>
    //   </div>
    //   <Card.Body>
    //     <Card.Title>Blue fancy hat</Card.Title>
    //     <Button variant="primary">$136</Button>
    //   </Card.Body>
    // </Card>
    <div className='card-style' onClick={() => {props.handleSetUserInfo({target:{value:props.src}}, 'image')}}>
        <img src={props.src} alt="obr" className='card-image'/>
        <div className='card-title'>{props.title}</div>
        <Button variant="primary" className='button-shop'>{props.price}</Button>
    </div>
  );
}

export default ShopCard;