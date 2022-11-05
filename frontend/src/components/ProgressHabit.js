import './ProgressHabit.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressHabit(props) {
    return <ProgressBar now={props.now} label={`${props.now}%`} className="progress-bar-habits"  variant="success" />;
  }
  
  export default ProgressHabit;