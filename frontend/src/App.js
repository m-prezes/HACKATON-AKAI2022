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



function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, [])
  
  return (
    <div className="app">
      {isLoading ? 
        <SplashScreen
          name="splash"
        /> 
        :
        <MainScreen/>}
    </div>
  );
}

export default App;
