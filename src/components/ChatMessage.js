import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div>
      <div className='flex shadow-sm mb-3'>
        <img 
        className='h-6'
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="user"/>
        
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        
      </div>
    </div>
  )
}

export default ChatMessage
