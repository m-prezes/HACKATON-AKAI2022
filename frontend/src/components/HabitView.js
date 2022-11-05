import ActivityIcon from './ActivityIcon';
import HabitUndone from './HabitUndone';
import './HabitView.css'

function HabitView(props) {
    return (
        <div className='habit-container'>
            <ActivityIcon img={props.img} isMargin={true} isSmall={true}/>
            <p className="habit-text">{props.habitName}</p>
            <HabitUndone/>
        </div>
    )
}

export default HabitView;