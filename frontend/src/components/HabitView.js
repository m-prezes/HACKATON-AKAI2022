import './HabitView.css'

function HabitView(props) {
    return (
        <div className='habit-container'>
            {/* ikonka */}
            <p className="habit-text">{props.habitName}</p>
        </div>
    )
}

export default HabitView;