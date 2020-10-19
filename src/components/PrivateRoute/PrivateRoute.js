import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    // loggedInUser.isSignedIn || localStorage.getItem("user")
                    loggedInUser.isSignedIn
                        ? (children)
                        : (
                            <Redirect
                                to={{
                                    pathname: "/Login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </div>
    );
};

export default PrivateRoute;