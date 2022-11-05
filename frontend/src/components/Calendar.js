import './Calendar.css'
import ActivityIcon from './ActivityIcon';

import sampleData from '../sample_data/sampleActivityInfo.js';
import { getWeekAndCurrentDay } from '../utils/getWeekAndCurrentDay';
import { getActivityColor } from '../utils/getActivityColor';

function Calendar(props) {

    const [week, today] = getWeekAndCurrentDay();

    return (
        <>
            <div className='calendar-container'>
                <div className='calendar-table'>
                    <div className='table-head'>
                        <div className='table-cell'>Mon</div>
                        <div className='table-cell'>Tue</div>
                        <div className='table-cell'>Wed</div>
                        <div className='table-cell'>Th</div>
                        <div className='table-cell'>Fri</div>
                        <div className='table-cell'>Sat</div>
                        <div className='table-cell'>Sun</div>
                    </div>
                    <div className='table-body'>
                        {week.map(day => {
                            return(
                                <div key={day} className={`table-column${day === today ? ' gray-column' : ''}`}>
                                    {sampleData
                                        .filter(activity => activity.day === day)
                                        .map(activity => {
                                            return (
                                            <div className='table-cell'>
                                                <ActivityIcon 
                                                    img={activity.activity}
                                                    color={getActivityColor(activity, today)}
                                                />
                                            </div>
                                            )
                                        })}
                                </div>
                            )
                        })}                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendar;