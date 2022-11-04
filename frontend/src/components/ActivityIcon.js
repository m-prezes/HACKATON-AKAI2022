import './ActivityIcon.css'

function ActivityIcon(props){

    return (
        <>
            <img
                className='activity-icon'  
                src={props.img} 
                alt="Activity Icon"
            />
        </>
    );
}

export default ActivityIcon;