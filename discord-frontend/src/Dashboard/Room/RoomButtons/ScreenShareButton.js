import React,{useState} from 'react'
import { IconButton } from '@mui/material'
import { ScreenShare, StopScreenShare } from '@mui/icons-material'


const ScreenShareButton = () => {
    const [screenSharingActive,setScreenSharingActive] = useState(true);
  const handleScreenShareToggle = () => {
    setScreenSharingActive(!screenSharingActive);
  }
    return (
    <IconButton onClick={handleScreenShareToggle} style={{color: 'white'}}>
      {screenSharingActive ? <ScreenShare /> : <StopScreenShare />}
    </IconButton>
  )
}

export default ScreenShareButton
