import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48319.34095741977!2d-73.99141803045404!3d40.806898925350126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ee44e2a557%3A0x46df83a0e687aa0a!2sCitymaps!5e0!3m2!1sen!2sus!4v1551292589020" 
            width="100%" 
            height="500px" 
            frameborder="0" 
            allowFullScreen></iframe>

            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;