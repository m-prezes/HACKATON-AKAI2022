import axios from "axios";

export const sendRequestAndGetResponse = async (chatMessage) => {
    let res = await axios({
        url: 'http://localhost:8000',
        method: 'post',
        data: {message: chatMessage},
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if(res.status == 200){
        // test for status you want, etc
        console.log(res.status)
    }    
    // Don't forget to return something   
    return res.data['response']
    
}   