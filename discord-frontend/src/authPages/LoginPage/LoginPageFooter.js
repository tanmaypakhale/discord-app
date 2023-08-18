import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import { useNavigate } from "react-router-dom";
import { Tooltip } from '@mui/material';

const getFromNotValidMessage = () => {
    return "Enter correct e-mail address and password should contain between 6 and 12 characters"
}

const getFormValidMessage = () => {
    return "Press to log in"
}

const LoginPageFooter = ({handleLogin, IsFormValid}) => {
    const navigate = useNavigate();
    const handlePushToRegisterPage = () => {
        navigate('/register');
    }

    return (
    <>
        <Tooltip title={!IsFormValid ? getFromNotValidMessage() : getFormValidMessage()}>
        <div>
            <CustomPrimaryButton label="Log in" additionalStyles={{marginTop: '30px'}} disabled={!IsFormValid} onClick={handleLogin}/>
        </div>
        </Tooltip>
        <RedirectInfo text='Need an account? '
        redirectText='Create an account'
        additionalStyles={{marginTop: '5px'}} redirectHandler={handlePushToRegisterPage}/>
    </>
  )
}

export default LoginPageFooter;
