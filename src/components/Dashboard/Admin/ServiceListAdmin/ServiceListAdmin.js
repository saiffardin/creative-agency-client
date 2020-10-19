import React from 'react';
import DashNav from '../../DashNav/DashNav';

import './ServiceListAdmin.css';

const ServiceListAdmin = () => {

    const clients = [
        {
            id : 1,
            name: 'Saif Chowdhury',
            email: 'saiffardin@gmail.com',
            service: 'Web Development',
            projectDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus blanditiis quis? Facilis odit, tempore quam archite."
        },

        {
            id : 2,
            name: 'Saif Chowdhury',
            email: 'saiffardin@gmail.com',
            service: 'Web Development',
            projectDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus blanditiis quis? Facilis odit, tempore quam archite."
        },

        {
            id : 3,
            name: 'Saif Chowdhury',
            email: 'saiffardin@gmail.com',
            service: 'Web Development',
            projectDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus blanditiis quis? Facilis odit, tempore quam archite."
        },

        {
            id : 4,
            name: 'Saif Chowdhury',
            email: 'saiffardin@gmail.com',
            service: 'Web Development',
            projectDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus blanditiis quis? Facilis odit, tempore quam archite."
        },

        {
            id : 5,
            name: 'Saif Chowdhury',
            email: 'saiffardin@gmail.com',
            service: 'Web Development',
            projectDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus blanditiis quis? Facilis odit, tempore quam archite."
        },
    ]

    return (
        <div className="admin-serviceList">
            <DashNav title="Service List"></DashNav>
            {/* <h1>Service List Admin</h1> */}
            <table className="table table-borderless table-hover">
                <thead className="table-head">
                    <tr>
                        <th className="text-secondary text-left" scope="col">Name</th>
                        {/* <th className="text-secondary" scope="col">Name</th> */}
                        <th className="text-secondary" scope="col">Email ID</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Detail</th>
                        {/* <th className="text-secondary" scope="col">Phone</th> */}
                    </tr>
                </thead>


                <tbody>
                    {
                        clients.map((client) =>
                            
                            <tr key={client.id}>
                                {/* <td>{index + 1}</td> */}
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.service}</td>
                                <td>{client.projectDetails}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServiceListAdmin;