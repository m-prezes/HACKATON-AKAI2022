import logo from '../assets/pinky.png'
import './SplashScreen.css'

function SplashScreen(props){
    return (
        <div className='splash-screen'>
            <img src={logo} alt='Logo'/>
            <p>{props.name}</p>
        </div>
    )
}

export default SplashScreen;