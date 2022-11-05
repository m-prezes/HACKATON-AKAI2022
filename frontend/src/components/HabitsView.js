import './HabitsView.css'
import HabitView from './HabitView';
import ActivityIcon from './ActivityIcon';
import baseball from '../assets/baseball.png'
import basketball from '../assets/basketball.png'
import chemistry from '../assets/chemistry.png'
import cycling from '../assets/cycling.png'
import eating from '../assets/eating.png'
import fitness from '../assets/fitness.png'
import maps from '../assets/maps.png'
import mind from '../assets/mind.png'
import travel from '../assets/travel.png'

function HabitsView(props) {
    return (
        <div className='habits-container'>
            <div className='day-label'>
                <div className='label-row'>
                    <p>Your Daily Habits</p>
                </div>
                <div className='label-habits'>
                    <HabitView img={maps} habitName="French learning"/>
                    <HabitView img={mind} habitName="Studying for college"/>
                    <HabitView img={travel} habitName="Cleaning my room"/>
                </div>
                
            </div>
            <div className='day-label'>
                <div className='label-row-middle'>
                    <p>Your Weekly Habits</p>
                </div>
                <div className='label-habits'>
                    <HabitView img={cycling} habitName="Riding a bike"/>
                    <HabitView img={basketball} habitName="Basketball"/>
                    <HabitView img={fitness} habitName="Running"/>
                </div>
            </div>
        </div>
    )
}

export default HabitsView;