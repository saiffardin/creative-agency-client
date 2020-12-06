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

    let { from } = location.state || { from: { pathname: "/dashboard/order" } };


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
                // if in admin then change the from

                isUserAdmin(res.email)
                    .then(isAdmin => {
                        console.log('user is admin:', isAdmin);
                        // console.log('from:', from);
                        // console.log(from.pathname);

                        res.isAdmin = isAdmin;
                        setLoggedInUser(res);
                        // console.log(res);

                        if (isAdmin) {
                            from.pathname = "/dashboard/addService";
                            // console.log("admin path:", from.pathname);
                        }
                    })
                    .then(() => {
                        history.replace(from)
                    })
            })
    }

    const isUserAdmin = (email) => {
        return fetch(`https://infinite-scrubland-26042.herokuapp.com/findAdmin/${email}`)
            .then(response => response.json())
            .then(data => {
                // console.log('data:', data);

                return data;
            })
    }


    return (
        <div className='d-flex flex-column align-items-center m-5'>
            <img
                src={logo}
                width="150"
                className="d-inline-block align-top mt-3 img-fluid"
                alt="React Bootstrap logo"
                onClick = {()=> history.push('/')}
            />

            {/* login form */}




            <div className="row">
                {/* <div className="col"> */}
                <div className={'login-div col d-flex flex-column justify-content-center align-items-center px-lg-5'}>
                    <h3>Login With</h3>
                    <div style={styleThirdParty} className=''>
                        <h5 className='my-2 mx-5 ' onClick={googleHandler}>
                            <img className='img-fluid' style={{ width: '40px' }} src={google_login} alt="" /> <span className="ml-3">Continue with Google</span>
                        </h5>
                    </div>

                    <p>Don't have an account <a href="#" onClick={googleHandler}>Create an account</a></p>
                </div>
                {/* </div> */}
            </div>



        </div>
    );
};

export default Login;