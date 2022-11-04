import './values/colors.css'
import './values/constants.css'
import './App.css'
import './views/SplashScreen'
import SplashScreen from './views/SplashScreen';
import { useEffect, useState } from 'react';
import MainScreen from './views/MainScreen';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

  <script
    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
    crossorigin></script>

  <script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script>

    </div>
  );
}

export default App;
