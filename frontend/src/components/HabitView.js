import ActivityIcon from './ActivityIcon';
import './HabitView.css'

function HabitView(props) {
    return (
        <div className='habit-container'>
            <ActivityIcon img={props.img} isMargin={true} isSmall={true}/>
            <p className="habit-text">{props.habitName}</p>
        </div>
    )
}

export default HabitView;