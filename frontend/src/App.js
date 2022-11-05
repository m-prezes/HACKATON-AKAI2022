import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import './values/colors.css'
import './values/constants.css'
import './App.css'
import './views/SplashScreen'
import SplashScreen from './views/SplashScreen';
import { useEffect, useState } from 'react';
import MainScreen from './views/MainScreen';
import Chat from './components/Chat';
import { configureStore } from '@reduxjs/toolkit';
import { messageReducer } from './redux/reducer';

function App() {

  const store = configureStore({reducer: messageReducer});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000);
  }, [])  
  
  return (
    <div className="app">
      {isLoading ? 
        <SplashScreen
          name="splash"
        /> 
        :
        <>
          <Chat store={store}/>
          <MainScreen/>
        </>}
    </div>
  );
}

export default App;
