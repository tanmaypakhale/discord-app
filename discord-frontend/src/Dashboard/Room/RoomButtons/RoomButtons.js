import React from 'react'
import { styled } from '@mui/material'
import CameraButton from './CameraButton'
import MicButton from './MicButton'
import CloseRoomButton from './CloseRoomButton'
import ScreenShareButton from './ScreenShareButton'
import{connect} from 'react-redux'
import { getActions } from '../../../store/actions/roomActions'

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


const RoomButtons = (props) => {
  console.log(props);
  const { localStream, isUserJoinedWithOnlyAudio } = props;
  return (
    <MainContainer>
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream ={localStream}/>}
      <CloseRoomButton />
      <MicButton localStream ={localStream}/>
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomButtons);