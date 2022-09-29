import emailLogo from '../../assets/email.png'
import passwordLogo from '../../assets/lock.png'
import faceBookLogo from '../../assets/Facebook.png'
import appleLogo from '../../assets/apple.png'
import googleLogo from '../../assets/google.png'
import hideEye from '../../assets/hideEye.svg'
import eyeUnhideLogo from '../../assets/eye.svg'
import { useState } from 'react'

const SignIn = () => {
    const [isShowPass, setShowPass ] =useState(false)

    return ( 

        <div className="signInUp__signIn-container__form">
            <div className="signInUp__signIn-container__form-head">
                <h4>Sign in</h4>
                <p>
                    If you don’t have an account register
                    <br/>
                    You can <a href="/signUp">Register here !</a>  
                </p>
            </div>
            <div className="signInUp__signIn-container__form-email">
                <p>Email</p>
                <div className="signInUp__signIn-container__form-email__input">
                    <img src={emailLogo} alt="emailLogo" />
                    <input type="email" placeholder="Enter your email address"/>
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

            <div className="signInUp__signIn-container__form-options" >
                <label>
                    <input type="checkbox" />
                    Rememebr me
                </label>
                <p><a href="#"> Forgot Password ? </a></p>
            </div>

            <div className="signInUp__signIn-container__form-login">
                <p><a href="#">Login</a></p>
            </div>

            <div className="signInUp__signIn-container__form-socialMedia">
                <p>or continue with</p>
                <div>
                    <img src={faceBookLogo} alt="faceBook" />
                    <img src={appleLogo} alt="apple" />
                    <img src={googleLogo} alt="google" />
                </div>
            </div>
        </div>
     );
}
 
export default SignIn;