import { useState } from 'react';
import Hero from '../components/Hero';
import MainView from '../components/MainView';
import Return from '../components/Return';
import './MainScreen.css'

function MainScreen(props) {
    const [mainViewState, setMainViewState] = useState('habits');

    const [coins, setCoins] = useState(200);

    function handleMainViewState(event) {
        console.log(event.currentTarget.value)
        console.log(event.target.value)
        setMainViewState(event.currentTarget.value);
    }

    return (
        <>
        {mainViewState != 'habits' && (
        <Return handleMainViewState={handleMainViewState}/>
        )}
        <Hero mainViewState={mainViewState} handleMainViewState={handleMainViewState} coins={coins}/>
        <MainView mainViewState={mainViewState} handleMainViewState={handleMainViewState} coins={coins} onCoinChange={setCoins}/>
        </>
    )
}

export default MainScreen;