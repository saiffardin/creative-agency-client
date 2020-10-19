import React, { useContext } from 'react';
import './Login.css';

import logo from '../../images/logos/logo.png';
import google_login from '../../images/google_login.png';
import { handleGoogleLogin } from './ThirdPartySignInManager';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/afterLogin" } };




    const styleThirdParty = {
        border: '1px solid lightgray',
        width: '400px',
        margin: '30px auto',
        borderRadius: '50px',
        cursor: 'pointer',
        background: 'whitesmoke'
    }


    const googleHandler = () => {
        console.log('Google');
        handleGoogleLogin(history, from)
            .then((res) => {
                setLoggedInUser(res);
                history.replace(from);
            })
    }


    return (
        <div className='d-flex flex-column align-items-center m-5'>
            <img
                src={logo}
                width="150"
                className="d-inline-block align-top mt-3 img-fluid"
                alt="React Bootstrap logo"
            />

            {/* login form */}
            <div className={'login-div  d-flex flex-column justify-content-center align-items-center'}>
                <h3>Login With</h3>
                <div style={styleThirdParty} >
                    <h5 className='my-2 mx-5' onClick={googleHandler}>
                        <img style={{ width: '40px' }} src={google_login} alt="" /> <span className="ml-3">Continue with Google</span>
                    </h5>
                </div>

                <p>Don't have an account <a href="#" onClick={googleHandler}>Create an account</a></p>
            </div>

        </div>
    );
};

export default Login;