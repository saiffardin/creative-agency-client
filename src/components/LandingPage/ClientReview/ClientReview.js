import React from 'react';
import { shuffle } from '../Services/Services';
import './ClientReview.css';
import SingleReview from './SingleReview/SingleReview';


const ClientReview = () => {

    let allReviews = [
        {
            id: 1,
            img: 'customer-1.png',
            name: 'Nash Patrik',
            designation: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        },

        {
            id: 2,
            img: 'customer-2.png',
            name: 'Miriam Barron',
            designation: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        },

        {
            id: 3,
            img: 'customer-3.png',
            name: 'Bria Malone',
            designation: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        }
    ];

    shuffle(allReviews);

    return (
        <main className='mt-5 ClientReview-div d-flex flex-column align-items-center'>

            <h1 className='my-5 text-center'>Clients <span>Feedback</span></h1>


            <section className='row mt-5 d-flex justify-content-center'>
                {/* <SingleReview></SingleReview> */}

                {
                    allReviews.map(review => <SingleReview review={review} key={review.id}></SingleReview>)
                }
                
            </section>

        </main>
    );
};

export default ClientReview;