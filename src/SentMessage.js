import React from 'react'
import './Chat.css'

function SentMessage ({ message }) {
  return (
    <div>
      <p className='chat__message chat__receiver'>
        <span className='chat__name'>Ninad</span>

        {message}

        <span className='chat__timestamp'>
          {new Date().toUTCString()}
        </span>
      </p>
    </div>
  )
}

export default SentMessage
