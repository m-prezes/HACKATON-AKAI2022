import './ActivityIcon.css'

function ActivityIcon({img, color = '', isMargin = false, isSmall = false}){

    return (
        <>
            <div className={`${color} 
                ${isMargin ? 'activity-icon-container-margin' : ''}
                ${isSmall ? 'activity-icon-container-small' : 'activity-icon-container'}`}>
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