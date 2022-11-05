import './HabitsView.css'
import HabitView from './HabitView';
import basketball from '../assets/basketball.png'
import cycling from '../assets/cycling.png'
import fitness from '../assets/fitness.png'
import maps from '../assets/maps.png'
import mind from '../assets/mind.png'
import travel from '../assets/travel.png'

function HabitsView(props) {
    return (
        <div className='habits-container'>
            <div className='day-label'>
                <div className='label-row'>
                    <p>{props.first}</p>
                </div>
                <div className='label-habits'>
                    {props.type === 'habits'
                    ?
                    <>
                        <HabitView isChechbox={false} img={maps} habitName="French learning" percent={0} points={0} denominator={1}/>
                        <HabitView isChechbox={false} img={mind} habitName="Drinking water" percent={75}  points={6} denominator={8}/>
                        <HabitView isChechbox={true} img={travel} habitName="Studying for college" percent={100}  points={1} denominator={1}/>
                    </>
                :
                <></>
                }

                </div>
                
            </div>
            <div className='day-label'>
                <div className='label-row-middle'>
                    <p>{props.second}</p>
                </div>
                <div className='label-habits'>
                {props.type === 'habits'
                    ?
                    <>
                        <HabitView isChechbox={false} img={cycling} habitName="Riding a bike" percent={50} points={2} denominator={4}/>
                        <HabitView isChechbox={false} img={basketball} habitName="Basketball" percent={40} points={1} denominator={3}/>
                        <HabitView isChechbox={false} img={fitness} habitName="Running" percent={0} points={0} denominator={2}/>
                    </>
                    :
                    <></>}
                                    </div>
            </div>
        </div>
    )
}

export default HabitsView;