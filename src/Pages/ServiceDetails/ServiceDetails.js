import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to Services details</h2>
            <h2>Welcome to Services details</h2>
            <h2>Welcome to Services details:{serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;