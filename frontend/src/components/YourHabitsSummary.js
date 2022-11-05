import ActivityIcon from './ActivityIcon';
import './YourHabitsSummary.css'
import HabitView from './HabitView';
import basketball from '../assets/basketball.png'
import cycling from '../assets/cycling.png'
import fitness from '../assets/fitness.png'
import maps from '../assets/maps.png'
import mind from '../assets/mind.png'

function YourHabitsSummary() {
    return (
        <div className='your-habits-container'>
            <div className='your-habits-line navg'><span className='span-bgc'>Your completed habits</span></div>
            <div className='your-habits-line'>
                <ActivityIcon img={maps} color="green-cell" isMargin={true}/>
                <div className='margin-left'><p className='clear-p'>20 French learning done in this month!</p></div>
            </div>
            <div className='your-habits-line'>
                <ActivityIcon img={mind} color="green-cell" isMargin={true}/>
                <div className='margin-left'><p className='clear-p'>150 Drinking water done in this month!</p></div>
            </div>
            <div className='your-habits-line'>
                <ActivityIcon img={fitness} color="green-cell" isMargin={true}/>
                <div className='margin-left'><p className='clear-p'>15 Running done in this month!</p></div>
            </div>
            <div className='your-habits-line'>
                <ActivityIcon img={basketball} color="green-cell" isMargin={true}/>
                <div className='margin-left'><p className='clear-p'>13 Basketball done in this month!</p></div>
            </div>
            <div className='your-habits-line'>
                <ActivityIcon img={cycling} color="green-cell" isMargin={true}/>
                <div className='margin-left'><p className='clear-p'>10 Riding a bike done in this month!</p></div>
            </div>
        </div>
    )
}

export default YourHabitsSummary;