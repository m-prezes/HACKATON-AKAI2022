import { useInsertionEffect, useState } from 'react';
import Hero from '../components/Hero';
import MainView from '../components/MainView';
import Return from '../components/Return';
import './MainScreen.css'
import avatar from '../assets/avatar.jpg'
import UserProfile from '../components/UserProfile';

function MainScreen(props) {
    const [userInfo, setUserInfo] = useState({'name': 'Martyna', 'coins': 200, 'items': [avatar], 'image': avatar })
    const [mainViewState, setMainViewState] = useState('habits');

    function handleSetUserInfo(event, type){
        const value = event.target.value
        if (type === 'coins'){
            const newCoins = userInfo.coins + value;
            const newUserInfo = {...userInfo, coins: newCoins};
            setUserInfo(newUserInfo);
        }
        else if(type === 'item'){
            if(!userInfo.items.some(item => item === value)){
                const newItems = [...userInfo.items, value];
                const newUserInfo = {...userInfo, items: newItems}
                setUserInfo(newUserInfo);
            }
        }else if(type === 'image'){
            setUserInfo({...userInfo, image: value});
        }
        }


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
        <Hero mainViewState={mainViewState} handleMainViewState={handleMainViewState} userInfo={userInfo}/>
        <MainView mainViewState={mainViewState} handleMainViewState={handleMainViewState} userInfo={userInfo} handleSetUserInfo={handleSetUserInfo}/>
        </>
    )
}

export default MainScreen;