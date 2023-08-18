import React,{useState, useEffect} from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInput from "./LoginPageInput";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const LoginPage = ({login}) => {
    const navigate = useNavigate();
    
    const [mail,setMail] = useState('');
    const [password,setPassword] = useState('');
    const [IsFormValid,setIsFormValid] = useState(false);

    useEffect(()=>{
        setIsFormValid(validateLoginForm({mail,password}));
    }, [mail,password,setIsFormValid]);

    const handleLogin = (e) => {
        const userDetails = {
            mail,
            password,
        }
        login(userDetails,navigate)
    }

    return (
        <div>
            <AuthBox>
                <LoginPageHeader />
                <LoginPageInput mail={mail} setMail={setMail} password={password} setPassword={setPassword} />
                <LoginPageFooter IsFormValid={IsFormValid} handleLogin={handleLogin} />
            </AuthBox>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null,mapActionsToProps)(LoginPage);