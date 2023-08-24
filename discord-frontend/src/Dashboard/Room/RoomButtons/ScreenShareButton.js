import React from 'react'
import { IconButton } from '@mui/material'
import { ScreenShare, StopScreenShare } from '@mui/icons-material'
import * as webRTCHandler from '../../../realtimeCommunication/webRTCHandler'


const constraints = {
  audio : false,
  video : true
}

const ScreenShareButton = ({
  localStream,
  screenSharingStream,
  setScreenSharingStream,
  isScreenSharingActive
}) => {
  
    const handleScreenShareToggle = async () => {
    if(!isScreenSharingActive){
      let stream = null;
      try{
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);

      }catch(err){
        console.log('error occured when trying to get an access to screen share stream')
      }

      if(stream){
        setScreenSharingStream(stream);
        webRTCHandler.switchOutgoingTracks(stream);
      }else{
        webRTCHandler.switchOutgoingTracks(localStream);
        screenSharingStream.getTracks().forEach((t) => t.stop());
        setScreenSharingStream(null);
      }
    }
  }
    return (
    <IconButton onClick={handleScreenShareToggle} style={{color: 'white'}}>
      {isScreenSharingActive ? <ScreenShare /> : <StopScreenShare />}
    </IconButton>
  )
}

export default ScreenShareButton
