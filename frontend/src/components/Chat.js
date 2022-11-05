import { useEffect, useState } from 'react';
import './Chat.css';
import { sendRequestAndGetResponse } from '../utils/sendRequestAndGetResponse';

function Chat(props) {

    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState("");
    const [flag, setFlag] = useState(false);
    const chatMess = props.store.getState();

    useEffect(() => {}, [flag])

    const updateScroll = () => {
        var element = document.getElementById("chat-collapse");
        element.scrollTop = element.scrollHeight;
    }

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleChange = (e) => {
        const input = document.getElementById('chat-collapse');
        setChecked(!checked);
        if (!checked) {
            input.style.maxHeight = "250px";
            input.style.width = "100%";
        } else {
            input.style.maxHeight = "0px";
            input.style.width = "0px";
        }
        setTimeout(() => {
            updateScroll();
        }, 250)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const oldValue = value;
        props.store.dispatch({
            type: 'ADD_MESSAGE',
            owner: 'user',
            message: value
        })
        setTimeout(() => {
            updateScroll();
        }, 25)
        setValue("");
        console.log(oldValue);
        sendRequestAndGetResponse(oldValue)
            .then(res => {
                console.log(res);
                props.store.dispatch({
                    type: 'ADD_MESSAGE',
                    owner: 'bot',
                    message: res
                })
                setFlag(!flag);
                setTimeout(() => {
                    updateScroll();
                }, 300)
            });
    }

    const handleEnterClick = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            props.store.dispatch({
                type: 'ADD_MESSAGE',
                owner: 'user',
                message: value
            })
            setTimeout(() => {
                updateScroll();
            }, 25)
            setValue("");
        }
    }

    return (
        <div className="wrap-collapsible">
            <div className='collapsible-container'>
                <input id="collapsible" className="toggle" type="checkbox" onChange={(e) => handleChange(e)}/>
                <label for="collapsible" className="lbl-toggle">Chat</label>
            </div>
            <div id='chat-collapse' className="collapsible-content">
                <div className="content-inner">
                    {chatMess.map( chatMessage => {
                        if (chatMessage.owner === "bot") {
                            return (
                                <div className='bot-message'>
                                    <p className='message'>
                                        {chatMessage.message}
                                    </p>
                                </div>
                            )
                        } else {
                            return (
                                <div className='user-message'>
                                    <p className='message'>
                                        {chatMessage.message}
                                    </p>
                                </div>
                            )
                        }
                    })}
                    <div className="inner-input-wrapper">
                        <input 
                            className='inner-input' 
                            type="text" 
                            onChange={(e) => handleInputChange(e)} 
                            value={value} 
                            onKeyDown={(e) => {handleEnterClick(e)}} 
                        />
                        <input 
                            className='inner-submit' 
                            type='button' 
                            value='Send' 
                            onClick={(e) => handleSubmit(e)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;
