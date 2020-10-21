import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../../App';
import SingleService from '../../../LandingPage/Services/SingleService/SingleService';
import DashNav from '../../DashNav/DashNav';



const ServiceListClient = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [clientOrders_1, setClientOrders_1] = useState([]);
    // const [singleService, setSingleService] = useState({});

    let email = loggedInUser.email;

    useEffect(() => {
        fetch(`http://localhost:5000/findOrders/${email}`)
            .then(response => response.json())
            .then(data => {

                data.forEach(service => {
                    // console.log(service);
                    getFullOrderInfo(service)
                        .then(fullService => {
                            console.log('the service:');
                            console.log(fullService);

                            setClientOrders_1([...clientOrders_1,fullService]);
                            console.log(clientOrders_1);
                        })
                        
                })

            })

    }, [])


    const getFullOrderInfo = (order) => {
        return fetch(`http://localhost:5000/findService/${order}`)
            .then(response => response.json())
            .then(data => {
                // console.log('data:', data);
                return data;
            })
    }

    let clientOrders = [
        {
            id: 1,
            img: 'service1.png',
            title: 'Web & Mobile Design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },

        {
            id: 2,
            img: 'service2.png',
            title: 'Graphic Design',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },

        {
            id: 3,
            img: 'service3.png',
            title: 'Web Development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
        }

    ];


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

            <div className='row my-3 container d-flex justify-content-center'>

                {
                    clientOrders.map(service => <SingleService service={service} key={service.id} serviceClicked={() => serviceClicked(service.title)}></SingleService>)
                    // clientOrders_1.map(service => <SingleService service={service} key={service._id} serviceClicked={() => serviceClicked(service.title)}></SingleService>)

                }

            </div>

        </div>
    );
};

export default ServiceListClient;