import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Services.css';
import SingleService from './SingleService/SingleService';

export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


const Services = () => {

    const history = useHistory();
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://render-creative-agency-server.onrender.com/loadAll')
            .then(response => response.json())
            .then(data => {
                // console.log('length: ', allServices.length);
                setAllServices(data);
                // console.log(data);
            })
    }, [])





    const serviceClicked = (title) => {
        console.log(title);
        // history.push({
        //     pathname: '/dashboard/order',
        //     service: title
        // });
    }

    // shuffle(allServices);

    return (
        <div id="OurTeam" className='services-div d-flex flex-column align-items-center'>
            <h1 className='text-center'>Provide awesome <span>services</span></h1>

            <div className='row my-3 container d-flex justify-content-center'>

                {
                    allServices.length < 1
                        ? <h1>Loading...</h1>
                        : allServices.map(service => <SingleService service={service} key={service._id} serviceClicked={() => serviceClicked(service.title)}></SingleService>)

                }

            </div>
        </div>
    );
};

export default Services;
