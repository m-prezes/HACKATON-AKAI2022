import logo from '../assets/pinky.png'
import './SplashScreen.css'

function SplashScreen(props){
    return (
        <div className='splash-screen'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='Logo'/>
            </div>
            <div>
                <h2 className='splash-screen-text'>
                    Congratulations! You have 3 day streak &#128293;
                </h2>
            </div>
        </div>
    )
}

export default SplashScreen;