import React, { useState } from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: '110%',
    height: '30px',
    background: '#3ba55d'
}

const AddFriendButton = () => {
  const [IsDialogOpen,setIsDialogOpen] = useState(false);

    const handleOpenAddFriendDialog = () => {
      setIsDialogOpen(true);
    };

    const handleCLoseAddFriendDialog = () => {
      setIsDialogOpen(false);
    }
  return (
    <>
      <CustomPrimaryButton 
        additionalStyles={additionalStyles}
        label = 'Add Friend'
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
      IsDialogOpen = {IsDialogOpen}
      closeDialogHandler = {handleCLoseAddFriendDialog} />
    </>
  )
}

export default AddFriendButton

