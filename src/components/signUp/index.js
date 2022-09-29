import emailLogo from '../../assets/email.png'
import userlLogo from '../../assets/user.png'
import passwordLogo from '../../assets/lock.png'
import hideEye from '../../assets/hideEye.svg'
import eyeUnhideLogo from '../../assets/eye.svg'
import { useState } from 'react'

const SignUp = () => {
    const [isShowPass, setShowPass ] = useState(false)
    const [isShowConfPass, setShowConfPass ] = useState(false)

    return ( 

        <div className="signInUp__signIn-container__form">
            <div className="signInUp__signIn-container__form-head">
                <h4>Sign up</h4>
                <p>
                    If you already have an account register
                    <br/>
                    You can <a href="/">Login here !</a>  
                </p>
            </div>
            <div className="signInUp__signIn-container__form-email">
                <p>Email</p>
                <div className="signInUp__signIn-container__form-email__input">
                    <img src={emailLogo} alt="emailLogo" />
                    <input type="email" placeholder="Enter your email address"/>
                </div>
            </div>

            <div className="signInUp__signIn-container__form-email">
                <p>Username</p>
                <div className="signInUp__signIn-container__form-email__input">
                    <img src={userlLogo} alt="userlLogo" />
                    <input type="text" placeholder="Enter your User name"/>
                </div>
            </div>

            <div className="signInUp__signIn-container__form-password">
                <p>Password</p>
                <div className="signInUp__signIn-container__form-password__input">
                    <img src={passwordLogo} alt="passwordLogo" />
                    <input type={isShowPass ? "text" :"password"} placeholder="Enter your Password"/>
                    <img src={eyeUnhideLogo} id={isShowPass ? "" : "none"} onClick={()=> setShowPass(!isShowPass)} alt="eyeLogo" />
                    <img src={hideEye} id={isShowPass ? "none" : ""} onClick={()=> setShowPass(!isShowPass)} alt="eyeLogo" />
                </div>
            </div>

            <div className="signInUp__signIn-container__form-password margin-top">
                <p>Confrim Password</p>
                <div className="signInUp__signIn-container__form-password__input">
                    <img src={passwordLogo} alt="passwordLogo" />
                    <input type={isShowConfPass ? "text" :"password"} placeholder="Confrim your Password"/>
                    <img src={eyeUnhideLogo} id={isShowConfPass ? "" : "none"} onClick={()=> setShowConfPass(!isShowConfPass)} alt="eyeLogo" />
                    <img src={hideEye} id={isShowConfPass ? "none" : ""} onClick={()=> setShowConfPass(!isShowConfPass)} alt="eyeLogo" />
                </div>
            </div>

            <div className="signInUp__signIn-container__form-login">
                <p><a href="#">Register</a></p>
            </div>

        </div>
     );
}
 
export default SignUp;