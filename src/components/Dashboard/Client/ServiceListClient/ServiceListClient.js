import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../../../App';
import SingleService from '../../../LandingPage/Services/SingleService/SingleService';
import DashNav from '../../DashNav/DashNav';



const ServiceListClient = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [clientOrders, setClientOrders] = useState([]);
    // const [serviceNamesOnly, setServiceNamesOnly] = useState([]);

    let email = loggedInUser.email;

    useEffect(() => {
        fetch(`https://render-creative-agency-server.onrender.com/findOrders/${email}`)
            .then(response => response.json())
            .then(services => {
                // console.log(services);

                services.forEach(eachService => {
                    console.log(eachService);
                    getFullOrderInfo(eachService)
                        .then(response => {

                            // append React
                            setClientOrders(clientOrders => [...clientOrders, response]);

                        })
                        .then(() => {
                            // console.log(clientOrders);
                        })
                })
            })



    }, [email])



    const getFullOrderInfo = (order) => {
        return fetch(`https://render-creative-agency-server.onrender.com/findService/${order}`)
            .then(response => response.json())
            .then(data => {
                // console.log('data:', data);

                return data;
            })
    }

    // let clientOrders = [
    //     {
    //         id: 1,
    //         img: 'service1.png',
    //         title: 'Web & Mobile Design',
    //         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    //     },

    //     {
    //         id: 2,
    //         img: 'service2.png',
    //         title: 'Graphic Design',
    //         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    //     },

    //     {
    //         id: 3,
    //         img: 'service3.png',
    //         title: 'Web Development',
    //         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    //     }

    // ];


    const serviceClicked = (title) => {
        console.log(title);
        // history.push({
        //     pathname: '/dashboard/order',
        //     service: title
        // });
    }


    return (
        <div>
            <DashNav title="Service List"></DashNav>

            <div className='row my-3 container d-flex  justify-content-center'>

                {

                    clientOrders.length > 0
                        ?
                        clientOrders.map(
                            (service, index) =>
                                <SingleService service={service} key={index} serviceClicked={() => serviceClicked(service.title)}>

                                    {/* <h1>Status</h1> */}
                                    {/* <button className=''>Delete</button> */}

                                </SingleService>
                        )
                        :
                        <h1>No Orders Yet</h1>

                }

            </div>

        </div>
    );
};

export default ServiceListClient;