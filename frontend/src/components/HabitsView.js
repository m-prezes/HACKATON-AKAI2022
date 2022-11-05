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
                    <HabitView isChechbox={false} img={maps} habitName="French learning" percent={40}/>
                    <HabitView isChechbox={false} img={mind} habitName="Studying for college" percent={40}/>
                    <HabitView isChechbox={true} img={travel} habitName="Cleaning my room" percent={40}/>
                </div>
                
            </div>
            <div className='day-label'>
                <div className='label-row-middle'>
                    <p>Your Weekly Habits</p>
                </div>
                <div className='label-habits'>
                    <HabitView isChechbox={false} img={cycling} habitName="Riding a bike" percent={40}/>
                    <HabitView isChechbox={false} img={basketball} habitName="Basketball" percent={40}/>
                    <HabitView isChechbox={false} img={fitness} habitName="Running" percent={40}/>
                </div>
            </div>
        </div>
    )
}

export default HabitsView;