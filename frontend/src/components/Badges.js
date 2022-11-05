import './Badges.css'
import b1 from './../assets/badges/badge (1).png'
import b2 from './../assets/badges/badge.png'
import b3 from './../assets/badges/gym.png'

function Badges() {
    return (
        <div className='badges-cont'>
            <div className='your-habits-line navg'><span className='span-bgc'>Your badges</span></div>
            <img src={b1} className="badge-picture"/>
            <span className='clear-p margin-left'>Super fast habits executor</span><br/>
            <img src={b2} className="badge-picture"/>
            <span className='clear-p margin-left'>Milestone from second level!</span><br/>
            <img src={b3} className="badge-picture"/>
            <span className='clear-p margin-left'>Hard-working gym </span>
        </div>
    )
}

export default Badges;