import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
           

            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2946137736512!2d-74.17321418446339!3d40.73354237932955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253829a70f1d3%3A0x4d3efa6b5652a5ac!2sPrudential+Center!5e0!3m2!1sen!2sus!4v1551411519993"             
            width="100%" 
            height="500px" 
            frameborder="0" 
            allowfullscreen></iframe>

            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;