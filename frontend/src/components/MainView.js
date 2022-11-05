import { Card } from 'react-bootstrap';
import Badges from './Badges';
import Calendar from './Calendar';
import ShopCard from './Card';
import HabitsView from './HabitsView';
import Roulette from './Rolette';
import './MainView.css'
import YourHabitsSummary from './YourHabitsSummary';

function MainView({mainViewState, handleMainViewState, onCoinChange, coins}) {
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
                    <Roulette onCoinChange={onCoinChange} coins={coins}/>
                </div>
                <div className='shop-container'>
                    <HabitsView first="Your wardrobe" second="Shop" type="shop"/>
                    {/* <ShopCard/> */}
                </div>
            </>
        )}
        {console.log(mainViewState)}
        {mainViewState === 'badge' && (
            <div className='badge-container'>
                <div className='three-view'>
                    <YourHabitsSummary/>
                </div>
                <div className='three-view strike-message semi-background'>
                    Your biggest streak is 10 days! Excellent!
                </div>
                <div className='three-view'>
                    <Badges/>
                </div>
            </div>
        )}
           
        </div>
    )
}

export default MainView;