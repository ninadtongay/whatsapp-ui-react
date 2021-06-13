import React, { useState } from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import SidebarChat from './SidebarChat'

function Sidebar () {
  const name = ['Karan', 'Nirmala', 'Naresh']
  const [input, setInput] = useState('')

  const filterName = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src='https://ninadtongay.github.io/images/about1.jpg' />
        <p>Ninad Tongay</p>
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchIcon />
          <input value={input} onChange={filterName} placeholder='Search or start new chat' type='text' />
        </div>
      </div>

      <div className='sidebar__chats'>
        {name.map((name, idx) => (
          <div key={idx}>
            <SidebarChat name={name} lastMessage='Hey' />
          </div>
        ))}
        {/* <SidebarChat name='Karan' lastMessage='Hey' />
        <SidebarChat name='Nirmala' lastMessage='How are you?' />
        <SidebarChat name='Surekha' lastMessage='See you soon!' /> */}
      </div>
    </div>
  )
}

export default Sidebar
