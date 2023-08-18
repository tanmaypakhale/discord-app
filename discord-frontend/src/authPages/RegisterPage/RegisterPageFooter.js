import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import { useNavigate } from "react-router-dom";
import { Tooltip } from '@mui/material';

const getFromNotValidMessage = () => {
    return "Username should contain between 3 and 12 characters and password should contains between 6 and 12 character.Also corecct e-mail address should be provided"
}

const getFormValidMessage = () => {
    return "Press to Register"
}

const RegisterPageFooter = ({handleRegister, IsFormValid}) => {
    const navigate = useNavigate();
    const handlePushToLoginPage = () => {
        navigate('/login');
    }

    return (
    <>
        <Tooltip title={!IsFormValid ? getFromNotValidMessage() : getFormValidMessage()}>
        <div>
            <CustomPrimaryButton label="Register" additionalStyles={{marginTop: '30px'}} disabled={!IsFormValid} onClick={handleRegister}/>
        </div>
        </Tooltip>
        <RedirectInfo text=''
        redirectText='Already have an account ?'
        additionalStyles={{marginTop: '5px'}} redirectHandler={handlePushToLoginPage}/>
    </>
  )
}

export default RegisterPageFooter;
