import { useState } from 'react';
import './Chat.css';

function Chat(props) {

    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        const input = document.getElementById('chat-collapse');
        setChecked(!checked);
        if (!checked) {
            input.style.maxHeight = "250px";
            input.style.maxWidth = "100%";
        } else {
            input.style.maxHeight = "0px";
            input.style.maxWidth = "0px";
        }
    };

    return (
        <div className="wrap-collapsible">
            <div className='collapsible-container'>
                <input id="collapsible" className="toggle" type="checkbox" onChange={(e) => handleChange(e)}/>
                <label for="collapsible" className="lbl-toggle">Chat</label>
            </div>
            <div id='chat-collapse' className="collapsible-content">
                <div className="content-inner">
                    <p>
                        QUnit is by calling one of the object that are embedded in JavaScript, and faster JavaScript program could also used with
                        its elegant, well documented, and functional programming using JS, HTML pages Modernizr is a popular browsers without
                        plug-ins. Test-Driven Development. QUnit is by calling one of the object that are embedded in JavaScript, and faster JavaScript program could also used with
                        its elegant, well documented, and functional programming using JS, HTML pages Modernizr is a popular browsers without
                        plug-ins. Test-Driven Development.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat;
