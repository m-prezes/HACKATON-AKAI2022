import './ProgressCounter.css'

function ProgressCounter(props) {
    return (
        <div className={props.points/props.denominator === 1 ? "green-progress" : "red-progress"}>
            <p className='clear-p'>{props.points}/{props.denominator}</p>
        </div>
    )
}

export default ProgressCounter;