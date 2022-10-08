import emailLogo from '../../assets/email.png'
import userlLogo from '../../assets/user.png'
import passwordLogo from '../../assets/lock.png'
import faceBookLogo from '../../assets/Facebook.png'
import appleLogo from '../../assets/apple.png'
import googleLogo from '../../assets/google.png'
import hideEye from '../../assets/hideEye.svg'
import eyeUnhideLogo from '../../assets/eye.svg'
import { useEffect, useState } from 'react'
import {loginUser} from '../../api'
import swal from 'sweetalert'

const SignIn = () => {
    const [isShowPass, setShowPass ] =useState(false)
    const [ username, setusername] = useState(null)
    const [ password, setPassword ] = useState(null)

    useEffect(()=>{
        console.log("password: ", password)
        console.log("username: ", username)

    },[username, password])

    const handleLogin = async e =>{
        e.preventDefault();
        const response = await loginUser({
            username,
            password
          });
          if ('accessToken' in response) {
            swal("Success", response.message, "success", {
              buttons: false,
              timer: 2000,
            })
            .then((value) => {
              localStorage.setItem('accessToken', response['accessToken']);
              localStorage.setItem('user', JSON.stringify(response['user']));
            //   window.location.href = "/profile";
            });
          } else {
            swal("Failed", response.message, "error");
          }
    }

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
                <p>Username</p>
                <div className="signInUp__signIn-container__form-email__input">
                    <img src={userlLogo} alt="emailLogo" />
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        onChange={(e)=> setusername(e.target.value) }
                     />
                </div>
            </div>

            <div className="signInUp__signIn-container__form-password">
                <p>Password</p>
                <div className="signInUp__signIn-container__form-password__input">
                    <img src={passwordLogo} alt="passwordLogo" />
                    <input
                        type={isShowPass ? "text" :"password"}
                        placeholder="Enter your Password"
                        onChange={(e)=> setPassword(e.target.value) }
                    />
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
                <p onClick={handleLogin}>
                <a>
                    Login
                </a>
                 </p>
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