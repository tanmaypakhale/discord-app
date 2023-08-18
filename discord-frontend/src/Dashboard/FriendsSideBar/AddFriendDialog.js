import React, { useEffect, useState } from 'react'
import { validateMail } from '../../shared/utils/validators';
import { Dialog, DialogTitle, Typography } from '@mui/material';
import {DialogContent} from '@mui/material';
import {DialogContentText} from '@mui/material';
import {DialogActions} from '@mui/material';
import InputWithLabel from '../../shared/components/InputWithLabel'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import {connect} from "react-redux";
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
    IsDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {},
}) => {
    const [mail, setMail] = useState('');
    const [IsFormValid,setIsFormValid] = useState('');

    const handleSendInvitation = () => {
        sendFriendInvitation({
            targetMailAddress: mail,
            
        },
        handleCloseDialog()
        )
    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    }

    useEffect(()=>{
        setIsFormValid(validateMail(mail));
    },[mail,setIsFormValid]);

  return (
    <div>
      <Dialog open={IsDialogOpen} onclose={handleCloseDialog}>
        <DialogTitle>
            <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                <Typography>
                    Enter e-mail addess of friend which you would like to invite
                </Typography>
            </DialogContentText>
            <InputWithLabel 
                label='Mail'
                type='text'
                value={mail}
                setValue={setMail}
                placeholder="Enter mail address"
            />
        </DialogContent>
        <DialogActions>
            <CustomPrimaryButton 
                onClick={handleSendInvitation}
                disabled={!IsFormValid}
                label="Send"
                additionalStyles={{
                    width: '100%'
                }}
            />
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null,mapActionsToProps)(AddFriendDialog)
