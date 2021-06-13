import React from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarChat.css'

function SidebarChat ({ name, lastMessage }) {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
        <p>{lastMessage}</p>
      </div>
    </div>
  )
}

export default SidebarChat
