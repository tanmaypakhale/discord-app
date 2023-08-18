export const validateLoginForm = ({mail, password}) =>{
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
}

export const validateRegisterForm = ({mail,password,username}) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    const isUsernameValid = validateUsername(username);
    
    return isMailValid && isPasswordValid && isUsernameValid
}
const validatePassword = (password) => {
    return password.length > 5 && password.length < 12;
}

export const validateMail = (mail) => {
    const emailPattern =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailPattern.test(mail);
}

const validateUsername = (username) => {
    return username.length > 2 && username.length < 13;
}