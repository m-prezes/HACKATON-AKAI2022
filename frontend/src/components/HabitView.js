import ActivityIcon from './ActivityIcon';
import HabitUndone from './HabitUndone';
import ProgressHabit from './ProgressHabit'
import PlusHabit from './PlusHabit'
import './HabitView.css'

function HabitView(props) {
    return (
        <div className='habit-container'>
            <ActivityIcon img={props.img} isMargin={true} isSmall={true}/>
            <p className="habit-text">{props.habitName}</p>
            {props.isChechbox 
            ?
                <HabitUndone/> 
            :
                <PlusHabit/>
            }
            <ProgressHabit now={props.percent}/>
        </div>
    )
}

export default HabitView;