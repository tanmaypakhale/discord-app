import React from 'react'
import { styled } from '@mui/material'
import CameraButton from './CameraButton'
import MicButton from './MicButton'
import CloseRoomButton from './CloseRoomButton'
import ScreenShareButton from './ScreenShareButton'

const MainContainer = styled('div')({
    height: '15%',
    width: '100%',
    backgroundColor: '#5865f2',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})


const RoomButtons = () => {
  return (
    <MainContainer>
      <CameraButton />
      <CloseRoomButton />
      <MicButton />
      <ScreenShareButton />
    </MainContainer>
  )
}

export default RoomButtons
