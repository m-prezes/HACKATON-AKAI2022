import './HabitsView.css'
import HabitView from './HabitView';

function HabitsView(props) {
    return (
        <div className='habits-container'>
            <div className='day-label'>
                <div className='label-row'>
                    <p>Your Daily Habits</p>
                </div>
                <HabitView habitName="French learning"/>
                <HabitView habitName="Studying for college"/>
                <HabitView habitName="Cleaning my room"/>
            </div>
            <div className='day-label'>
                <div className='label-row-middle'>
                    <p>Your Weekly Habits</p>
                </div>
                <HabitView habitName="Riding a bike"/>
                <HabitView habitName="Basketball"/>
                <HabitView habitName="Running"/>
            </div>
        </div>
    )
}

export default HabitsView;