import {faClipboardList, faCommentAlt, faPlus, faShoppingCart, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useContext} from 'react';
import './Sidebar.css';

import {Link} from 'react-router-dom';
import {UserContext} from '../../../App';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="sidebar-div p-md-3 pr-0">
            {/* d-sm-none d-md-block */}

            <p className='text-center'>
                <img width="150" className=" m-3 img-fluid" src={logo} alt="logo" />
            </p>

            {
                loggedInUser.isAdmin
                    ?
                    // Admin d-md-inline-flex
                    < ul className="list-unstyled p-md-3 mt-md-3">

                        <Link to="/dashboard/serviceListAdmin">
                            <li><FontAwesomeIcon width="10" icon={faClipboardList} />  <span>Service list</span></li>
                        </Link>

                        <Link to="/dashboard/addService">
                            <li><FontAwesomeIcon width="10" icon={faPlus} /><span>Add Service</span></li>
                        </Link>

                        <Link to="/dashboard/makeAdmin">
                            <li><FontAwesomeIcon width="10" icon={faUserPlus} /><span>Make Admin</span></li>
                        </Link>


                    </ul>
                    :
                    //Normal User
                    <ul className="list-unstyled p-md-3 mt-md-3">
                        {/* order */}
                        <li>
                            <Link to='/dashboard/order'>
                                <FontAwesomeIcon width="10" icon={faShoppingCart} /><span>Order</span>
                            </Link>
                        </li>

                        {/* service list */}
                        <li>
                            <Link to='/dashboard/serviceListClient'>
                                <FontAwesomeIcon width="10" icon={faClipboardList} /> <span>Service list</span>
                            </Link>
                        </li>

                        {/* Review */}
                        <li>
                            <Link to='/dashboard/review'>
                                <FontAwesomeIcon width="10" icon={faCommentAlt} /><span>Review</span>
                            </Link>
                        </li>

                    </ul>
            }

        </div >
    );
};

export default Sidebar;