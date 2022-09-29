import SignUp from "../components/signUp";
import '../components/global/globalStyle.css'
import ImageVideo from '../components/global/imgVideo'

const SignUpPage = () => {
    return ( 
        <div className="signInUp__signIn">
            <div className="signInUp__siginIn-image">
                <ImageVideo/>
            </div>
            <div className="signInUp__signIn-container">
                <SignUp/> 
            </div>
        </div>
    );
}
 
export default SignUpPage;