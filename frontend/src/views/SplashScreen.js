import logo from '../assets/pinky.png'
import './SplashScreen.css'

function SplashScreen(props){
    return (
        <div className='splash-screen'>
            <img className='logo' src={logo} alt='Logo'/>
        </div>
    )
}

export default SplashScreen;