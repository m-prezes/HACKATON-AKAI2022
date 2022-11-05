import Hero from '../components/Hero';
import MainView from '../components/MainView';
import Chat from '../components/Chat';
import './MainScreen.css'

function MainScreen(props) {
    return (
        <>
        <Chat />   
        <Hero />
        <MainView />
        </>
    )
}

export default MainScreen;