import React from 'react'
import {styled} from '@mui/material'
import MainPageButton from './MainPageButton'
import CreateRoomButton from './CreateRoomButton'
import { connect } from 'react-redux'
import ActiveRoomButton from './ActiveRoomButton'

const MainContainer = styled('div')({
    width: '72px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#202225'
})

const SideBar = ({ activeRooms }) => {
  return (
    <MainContainer>
        <MainPageButton />
        <CreateRoomButton />
        {activeRooms.map((room) => (
          <ActiveRoomButton 
            roomId={room.roomId}
            creatorUsername={room.creatorUsername}
            amountOfParticipants={room.participants.length}
            key={room.roomId}
            isUserInRoom={room.isUserInRoom}
            />
        ))}
    </MainContainer>
  )
}

const mapStateStateToProps = ({room}) => {
  return {
    ...room,
  }
}

export default connect(mapStateStateToProps)(SideBar);
