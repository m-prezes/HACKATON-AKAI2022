import Calendar from './Calendar';
import HabitsView from './HabitsView';
import './MainView.css'

function MainView({mainViewState, handleMainViewState}) {
    return (
        <div className='main-view'> 
        {mainViewState === 'habits' && (
            <>
                <div className='left-main-view'>
                    <HabitsView/>
                </div>
                <div className='right-main-view'>
                    <Calendar/>
                </div>
            </>
        )}
           
        </div>
    )
}

export default MainView;