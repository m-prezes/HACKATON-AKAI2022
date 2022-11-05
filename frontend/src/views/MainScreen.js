import { useState } from 'react';
import Hero from '../components/Hero';
import MainView from '../components/MainView';
import Chat from '../components/Chat';
import Return from '../components/Return';
import './MainScreen.css'

function MainScreen(props) {
    const [mainViewState, setMainViewState] = useState('habits');

    function handleMainViewState(event) {
        console.log(event.target.value)
        setMainViewState(event.target.value);
    }

    return (
        <>
        {mainViewState != 'habits' && (
        <Return handleMainViewState={handleMainViewState}/>
        )}
        <Chat />   
        <Hero mainViewState={mainViewState} handleMainViewState={handleMainViewState}/>
        <MainView mainViewState={mainViewState} handleMainViewState={handleMainViewState}/>
        </>
    )
}

export default MainScreen;