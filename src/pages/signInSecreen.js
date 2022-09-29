import SignIn from "../components/signIn";
import '../components/global/globalStyle.css'
import ImageVideo from '../components/global/imgVideo'

const SignInPage = () => {
    return ( 
        <div className="signInUp__signIn">
            <div className="signInUp__siginIn-image">
                <ImageVideo/>
            </div>
            <div className="signInUp__signIn-container">
                <SignIn/> 
            </div>
        </div>
    );
}
 
export default SignInPage;