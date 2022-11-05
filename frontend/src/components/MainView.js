import { Card } from 'react-bootstrap';
import Calendar from './Calendar';
import ShopCard from './Card';
import HabitsView from './HabitsView';
import './MainView.css'

function MainView({mainViewState, handleMainViewState}) {
    return (
        <div className='main-view'> 
        {mainViewState === 'habits' && (
            <>
                <div className='left-main-view'>
                    <HabitsView type="habits" first="Your daily habits" second="Your weekly habits"/>
                </div>
                <div className='right-main-view'>
                    <Calendar/>
                </div>
            </>
        )}
        {mainViewState === 'shop' && (
            <>
                <div className='roulette-container'>
                    {/* <HabitsView/> */}
                    hej
                </div>
                <div className='shop-container'>
                    <ShopCard/>
                </div>
            </>
        )}
           
        </div>
    )
}

export default MainView;