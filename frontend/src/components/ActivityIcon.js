import './ActivityIcon.css'

function ActivityIcon({img, color = ''}){

    return (
        <>
            <div className={`activity-icon-container ${color}`}>
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