import emailLogo from '../../assets/email.png'
import userlLogo from '../../assets/user.png'
import passwordLogo from '../../assets/lock.png'
import hideEye from '../../assets/hideEye.svg'
import eyeUnhideLogo from '../../assets/eye.svg'
import { useState } from 'react'
import { createUser } from '../../api'
import swal from 'sweetalert'

const SignUp = () => {
    const [isShowPass, setShowPass ] = useState(false)
    const [isShowConfPass, setShowConfPass ] = useState(false)
    const [fname, setFname ] = useState("MR.")
    const [lname, setLname ] = useState("hadi")
    const [username, setUsername ] = useState(null)
    const [password, setPassword ] = useState(null)
    const [email, setEmail ] = useState(null)
    const [confrimPassword, setConfrimPassword ] = useState(null)

    const avatar = "https://www.melivecode.com/users/cat.png"

    const handleLogin = async e =>{
        e.preventDefault();
        if (confrimPassword !== password) {
            swal("Failed", "passwords do not matched", "error");
        } else {
            
            const response = await createUser({
                fname,
                lname,
                username,
                password,
                email,
                avatar,
            });
            if (response.status === "ok") {
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
    }


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
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div className="signInUp__signIn-container__form-email">
                <p>Username</p>
                <div className="signInUp__signIn-container__form-email__input">
                    <img src={userlLogo} alt="userlLogo" />
                    <input
                        type="text"
                        placeholder="Enter your User name"
                        onChange={(e) => setUsername(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <img src={eyeUnhideLogo} id={isShowPass ? "" : "none"} onClick={()=> setShowPass(!isShowPass)} alt="eyeLogo" />
                    <img src={hideEye} id={isShowPass ? "none" : ""} onClick={()=> setShowPass(!isShowPass)} alt="eyeLogo" />
                </div>
            </div>

            <div className="signInUp__signIn-container__form-password margin-top">
                <p>Confrim Password</p>
                <div className="signInUp__signIn-container__form-password__input">
                    <img src={passwordLogo} alt="passwordLogo" />
                    <input
                        type={isShowConfPass ? "text" :"password"}
                        placeholder="Confrim your Password"
                        onChange={(e) => setConfrimPassword(e.target.value)}
                    />
                    <img src={eyeUnhideLogo} id={isShowConfPass ? "" : "none"} onClick={()=> setShowConfPass(!isShowConfPass)} alt="eyeLogo" />
                    <img src={hideEye} id={isShowConfPass ? "none" : ""} onClick={()=> setShowConfPass(!isShowConfPass)} alt="eyeLogo" />
                </div>
            </div>

            <div className="signInUp__signIn-container__form-login">
                <p
                    onClick={handleLogin}
                >
                    <a>Register</a>
                </p>
            </div>

        </div>
     );
}
 
export default SignUp;