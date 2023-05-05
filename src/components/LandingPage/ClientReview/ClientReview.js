import React, {useEffect, useState} from 'react';
import './ClientReview.css';
import SingleReview from './SingleReview/SingleReview';


const ClientReview = () => {


    const [allReviews, setAllReviews] = useState([]);


    useEffect(() => {
        fetch('https://render-creative-agency-server.onrender.com/loadAllReviews')
            .then(response => response.json())
            .then(data => {
                // console.log('length: ', allServices.length);
                setAllReviews(data);
                // console.log(data);
            })
    }, [])



    return (
        <main className='mt-5 ClientReview-div d-flex flex-column align-items-center'>

            <h1 className='my-5 text-center'>Clients <span>Feedback</span></h1>

            <section className='row mt-5 d-flex justify-content-center'>

                {
                    allReviews.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
                }

            </section>

        </main>
    );
};

export default ClientReview;