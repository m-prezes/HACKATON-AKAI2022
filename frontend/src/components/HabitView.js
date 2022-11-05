import ActivityIcon from './ActivityIcon';
import HabitUndone from './HabitUndone';
import ProgressHabit from './ProgressHabit'
import PlusHabit from './PlusHabit'
import './HabitView.css'
import ProgressCounter from './ProgressCounter';
import { useState } from 'react';

function HabitView(props) {

    const [points, setPoints] = useState(props.points)

    const handleClick = () => {
        if (points  < props.denominator) {
            setPoints(points + 1);
        }
    };

    return (
        <div className='habit-container'>
            <ActivityIcon img={props.img} isMargin={true} isSmall={true}/>
            <p className="habit-text">{props.habitName}</p>
            <PlusHabit onClick={handleClick}/>
            <ProgressHabit now={Math.round((points / props.denominator) * 100)}/>
            <ProgressCounter points={points} denominator={props.denominator}/>
        </div>
    )
}

export default HabitView;