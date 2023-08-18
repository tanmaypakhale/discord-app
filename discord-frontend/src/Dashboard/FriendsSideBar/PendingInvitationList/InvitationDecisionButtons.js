import React from 'react'
import {Check,Close} from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'

const InvitationDecisionButtons = ({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler}) => {
  return (
    <Box sx={{display: 'flex'}}>
      <IconButton style={{color: 'white'}} disabled={disabled} onClick={acceptInvitationHandler}>
        <Check/>
      </IconButton>
    <IconButton style={{color: 'white'}} disabled={disabled} onClick={rejectInvitationHandler}>
      <Close/>
    </IconButton>
  </Box>
  )
}

export default InvitationDecisionButtons
