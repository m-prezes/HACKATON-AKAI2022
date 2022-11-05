import './ActivityIcon.css'

function ActivityIcon({img, color = '', isMargin = false}){

    return (
        <>
            <div className={`activity-icon-container ${color} ${isMargin ? 'activity-icon-container-margin' : ''}`}>
                <img
                    className='activity-icon'  
                    src={img} 
                    alt="Activity Icon"
                />
            </div>
        </>
    );
}

export default ActivityIcon;