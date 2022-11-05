import logo from '../assets/pinky.png'
import './SplashScreen.css'

function SplashScreen(props){
    return (
        <div className='splash-screen'>
            <div className='splash-screen-title'>
                <span style={{"--i": 1}}>H</span>
                <span style={{"--i": 2}}>A</span>
                <span style={{"--i": 3}}>B</span>
                <span style={{"--i": 4}}>I</span>
                <span style={{"--i": 5}}>T</span>
                <span style={{"--i": 6}}>S</span>
                <span style={{"--i": 7}}>.</span>
                <span style={{"--i": 8}}>A</span>
                <span style={{"--i": 9}}>I</span>
            </div>
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