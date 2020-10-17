import React from 'react';
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

    let allServices = [
        {
            id: 1,
            img: 'service1.png',
            title: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },

        {
            id: 2,
            img: 'service2.png',
            title: 'Graphic design',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },

        {
            id: 3,
            img: 'service3.png',
            title: 'Web development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
        }

    ];


    shuffle(allServices);


    return (
        <div id="OurTeam" className='services-div d-flex flex-column align-items-center'>
            <h1 className='text-center'>Provide awesome <span>services</span></h1>

            <div className='row my-3 container d-flex justify-content-center'>

                {
                    allServices.map(service => <SingleService service={service} key={service.id} ></SingleService>)
                }

            </div>


        </div>
    );
};

export default Services;
