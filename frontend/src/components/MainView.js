import Calendar from './Calendar';
import './MainView.css'

function MainView(props) {
    return (
        <div className='main-view'> 
            <div className='left-main-view'>cos</div>
            <div className='right-main-view'>
                <Calendar/>
            </div>
        </div>
    )
}

export default MainView;