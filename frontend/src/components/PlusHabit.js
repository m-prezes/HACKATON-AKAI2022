import './PlusHabit.css'
import plus from './../assets/plus.png'

function PlusHabit({onClick}) {
    return (
        <img src={plus} alt="+1" className='plus-one-icon' onClick={onClick}/>
    )
}

export default PlusHabit;