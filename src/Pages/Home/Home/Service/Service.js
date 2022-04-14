import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <Card className='mb-3 service' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{price}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button onClick={() => navigateToServiceDetail(id)} variant="primary">BOOK {name}</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;

// service container