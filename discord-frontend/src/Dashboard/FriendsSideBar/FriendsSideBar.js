import React from 'react'
import { styled } from '@mui/material'
import AddFriendButton from './AddFriendButton'
import FriendsTitle from './FriendsTitle'
import FriendsList from './FriendsList.js/FriendsList'
import PendingInvitationList from './PendingInvitationList/PendingInvitationList'

const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2F3136'
})

const FriendsSideBar = () => {
  return (
    <MainContainer>
        <AddFriendButton />
        <FriendsTitle title='Private Messages' />
        <FriendsList />
        <FriendsTitle title='Invitations' />
        <PendingInvitationList />
    </MainContainer>
  )
}

export default FriendsSideBar;
