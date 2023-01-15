import React, {useEffect, useState} from 'react';
import DashNav from '../../DashNav/DashNav';

import './ServiceListAdmin.css';

const ServiceListAdmin = () => {

    const [clients, setClients] = useState([]);
    const [orderIds, setOrderIds] = useState([]);


    useEffect(() => {
        fetch('https://creative-agency-server.up.railway.app/loadAllOrders')
            .then((response) => response.json())
            .then(data => {
                // console.log(data);
                let onlyIDs = data.map(singleData => singleData._id);
                setClients(data);
                // console.log("id length: ",onlyIDs.length);
                // console.log(onlyIDs);

                setOrderIds(onlyIDs);
            })




    }, [])


    const handleChange = (e) => {

        let tableRow = e.target.parentNode.parentNode;
        let tableIndex = tableRow.getElementsByTagName('td')[0].innerHTML;
        let singleOrderID = orderIds[tableIndex - 1];

        // console.log(tableRow);
        // console.log(orderIds);

        // console.log("index:", tableIndex);
        // console.log('ID:', singleOrderID);

        let currStatus = e.target.value;
        // console.log('currStatus:', e.target.value);
        // console.log();


        if (currStatus === 'Pending') {
            e.target.className = 'text-danger';
        }

        else if (currStatus === 'Done') {
            e.target.className = 'text-success';
        }

        else if (currStatus === 'On-Going') {
            e.target.className = 'text-warning';
        }

        // update database
        updateStatusDB(singleOrderID, currStatus)

    }

    const updateStatusDB = (id, status) => {
        let order = {status};

        console.log('order:', id);
        console.log('status:', status);
        console.log(order);

        fetch(`https://creative-agency-server.up.railway.app/updateStatus/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
            .then(result => result.json())

            .then(data => {
                if (data) {
                    // console.log("data:",data)
                    alert('Order Status Updated Successfully');
                }

                else {
                    alert('Failed to update order status');
                }

            })

    }

    const dropDownStyle = {
        border: '0'
    }




    return (
        <div className="admin-serviceList col">
            <DashNav title="Service List"></DashNav>


            <div className="table-responsive">
                <table className="table table-borderless table-hover">
                    <thead className="table-head">
                        <tr>
                            {/* <th className="text-secondary " scope="col">OrderID</th> */}
                            <th className="text-secondary " scope="col">No.</th>
                            <th className="text-secondary " scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email ID</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Project Detail</th>
                            <th className="text-secondary" scope="col">Status</th>

                        </tr>
                    </thead>


                    <tbody>
                        {
                            clients.map((client, index) =>

                                <tr key={client._id}>
                                    {/* <td className=''>{client._id}</td> */}
                                    <td className='' id='orderID'>{index + 1}</td>
                                    <td className=''>{client.name}</td>
                                    <td className=''>{client.email}</td>
                                    <td className=''>{client.service}</td>
                                    <td className=''>{client.projectDetail}</td>

                                    <td>
                                        <select style={dropDownStyle}
                                            className=
                                            {
                                                client.status === 'Done' ? 'text-success' :
                                                    client.status === 'Pending' ? 'text-danger' :
                                                        client.status === 'On-Going' ? 'text-warning' : ''
                                            }

                                            id="dropdown"
                                            onChange={handleChange}>
                                            <option className='d-none' disabled value selected > {client.status} </option>
                                            <option className='text-body' value="Pending" >Pending</option>
                                            <option className='text-body' value="Done">Done</option>
                                            <option className='text-body' value="On-Going">On-Going</option>
                                        </select>
                                    </td>



                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceListAdmin;