import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './DashNav.css'

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";


import { useHistory } from 'react-router-dom';


const DashNav = (props) => {
    const { title } = props;
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // console.log('dash nav Name:', loggedInUser.displayName);

    const logOutHandle = () => {
        console.log('log out');

        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            // console.log('Sign-out successful.');
            // console.log(loggedInUser);
            // loggedInUser.isSignedIn = false;
            history.push('/login') ;
            window.location.reload();
            
        }).catch(function (error) {
            // An error happened.
            console.log('log out - Jhamela Occur');
        });
    }

    return (
        <div className="dash-nav d-flex justify-content-between p-md-3">
            <h5 className="title">{title}</h5>

            <div>
                <h5>{loggedInUser.displayName}</h5>

                <div className='logOut' onClick={logOutHandle}>
                    <FontAwesomeIcon width="10" icon={faSignOutAlt} /><span className='pl-1'>Log Out</span>
                </div>

            </div>
        </div >

    );
};

export default DashNav;