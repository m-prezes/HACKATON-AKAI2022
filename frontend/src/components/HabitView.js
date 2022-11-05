import ActivityIcon from './ActivityIcon';
import HabitUndone from './HabitUndone';
import ProgressHabit from './ProgressHabit'
import PlusHabit from './PlusHabit'
import './HabitView.css'
import ProgressCounter from './ProgressCounter';

function HabitView(props) {
    return (
        <div className='habit-container'>
            <ActivityIcon img={props.img} isMargin={true} isSmall={true}/>
            <p className="habit-text">{props.habitName}</p>
            <PlusHabit/>
            <ProgressHabit now={props.percent}/>
            <ProgressCounter points={props.points} denominator={props.denominator}/>
        </div>
    )
}

export default HabitView;