import './Calendar.css'
import ActivityIcon from './ActivityIcon';
import baseball from '../assets/baseball.png'
import basketball from '../assets/basketball.png'
import chemistry from '../assets/chemistry.png'
import cycling from '../assets/cycling.png'
import eating from '../assets/eating.png'
import fitness from '../assets/fitness.png'
import maps from '../assets/maps.png'
import mind from '../assets/mind.png'
import travel from '../assets/travel.png'

function Calendar(props) {
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
                        <div className='table-column'>
                            <div className='table-cell'>
                                <ActivityIcon 
                                    img={baseball}
                                />
                            </div>
                            <div className='table-cell'>
                                <ActivityIcon 
                                    img={basketball}
                                />
                            </div>
                        </div>
                        <div className='table-column'>
                            <div className='table-cell'>
                                <ActivityIcon 
                                    img={chemistry}
                                />
                            </div>
                        </div>
                        <div className='table-column'>
                            <div className='table-cell'>
                                <ActivityIcon 
                                    img={cycling}
                                />
                            </div>
                        </div>
                        <div className='table-column'>
                            <div className='table-cell'>
                                <ActivityIcon 
                                    img={fitness}
                                />
                            </div>
                            <div className='table-cell'>
                                <ActivityIcon 
                                    img={maps}
                                />
                            </div>
                        </div>
                        <div className='table-column'>
                            <div className='table-cell'>
                                <ActivityIcon 
                                    img={mind}
                                />
                            </div>
                        </div>
                        <div className='table-column'>
    
                        </div>
                        <div className='table-column'>
                            <div className='table-cell'>
                                <ActivityIcon 
                                    img={baseball}
                                />
                            </div>
                            <div className='table-cell'>
                                <ActivityIcon 
                                    img={basketball}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendar;