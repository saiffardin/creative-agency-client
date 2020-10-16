import React from 'react';
import { Button } from 'react-bootstrap';

import imgFrame from '../../../images/logos/Frame.png'
import './TopBanner.css';

const TopBanner = () => {
    return (
        <main>
            <div className='mt-3 mx-5 pt-3 pb-5 top-banner'>
                <div className="row">

                    {/* Left side : text */}
                    <div className="col-lg-5  px-5 d-flex justify-content-center flex-column">
                        <h1 className="px-5">Let’s Grow Your Brand To The Next Level</h1>
                        <p className="px-5 py-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.
                        </p>

                        <div className="px-5">
                            <Button className="landingPage-btn" >Hire us</Button>
                        </div>
                    </div>

                    {/* right side : img */}
                    <div className="col-lg-7 d-flex align-items-center">
                        <img src={imgFrame} className="img-fluid w-75 ml-5" alt='imgFrame' />
                    </div>
                </div>
            </div>
    
        </main>
    );
};

export default TopBanner;