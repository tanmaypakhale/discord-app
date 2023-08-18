import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';


const LoginPageInput = ({mail, setMail, password, setPassword}) => {
  return (
    <div>
      <InputWithLabel value={mail} setValue={setMail} label='E-mail' type='text' placeholder='Enter e-mail address'/>
      <InputWithLabel value={password} setValue={setPassword} label='Password' type='password' placeholder='Enter Password'/>
    </div>
  )
}

export default LoginPageInput
