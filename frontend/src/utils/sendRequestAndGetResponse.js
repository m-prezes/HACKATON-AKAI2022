export const sendRequestAndGetResponse = async (chatMessage) => {
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(chatMessage)
    } 
    const response = await fetch("tuurl", config)
}