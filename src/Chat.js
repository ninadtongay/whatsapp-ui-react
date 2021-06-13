import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MoodIcon from '@material-ui/icons/Mood'
import { AttachFile, MoreVert } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'
import ToggleOffIcon from '@material-ui/icons/ToggleOff'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'

function Chat ({ messages }) {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState([{
    messageT: 'Use the toggle at the bottom to send and receive message',
    sender: true
  }])

  const [flag, setFlag] = useState(false)

  const submitMessage = (e) => {
    e.preventDefault()

    const newmsg = {
      messageT: input,
      sender: flag
    }
    setMessage([...message, newmsg])
    console.log(message)
    setInput('')
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Karan</h3>
          <p>{new Date().toUTCString()}</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>

        {message.map((msg, idx) => {
          if (msg.sender) {
            return (
              <p className='chat__message chat__receiver' key={idx}>
                <span className='chat__name'>Ninad</span>

                {msg.messageT}

                <span className='chat__timestamp'>
                  {new Date().toUTCString()}
                </span>
              </p>
            )
          } else {
            return (
              <p className='chat__message ' key={idx}>
                <span className='chat__name'>Karan</span>

                {msg.messageT}

                <span className='chat__timestamp'>
                  {new Date().toUTCString()}
                </span>
              </p>
            )
          }
        })}

      </div>

      <div className='chat__footer'>
        <IconButton>
          <MoodIcon />
        </IconButton>
        <form>
          <input value={input} onChange={(e) => { setInput(e.target.value) }} placeholder='Type a message' type='text' />
          <button onClick={submitMessage} type='submit'>Send a message</button>
        </form>

        {flag ? <div onClick={() => setFlag(false)}><IconButton><ToggleOnIcon /></IconButton></div> : <div onClick={(() => setFlag(true))}> <IconButton><ToggleOffIcon /> </IconButton></div>}

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
