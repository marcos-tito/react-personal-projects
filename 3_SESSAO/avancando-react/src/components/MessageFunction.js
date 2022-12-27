import React from 'react'

const MessageFunction = ({handleMessage}) => {
    const messages = ["Fora","Bolsonaro","Lula"]


    return(
        <div>
            <button onClick={() => handleMessage(messages[0])}>1</button>
            <button onClick={() => handleMessage(messages[1])}>2</button>
            <button onClick={() => handleMessage(messages[2])}>3</button>
        </div>
    )

}

export default MessageFunction