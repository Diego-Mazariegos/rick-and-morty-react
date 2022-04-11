import React from 'react';
import { Card, Button } from 'react-bootstrap'

const MyCards = ({ character }) => {

    return (
            <Card key={character?.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={character?.image} />
                <Card.Body>
                    <Card.Title>{character?.name}</Card.Title>
                    <Card.Text>{character?.gender}</Card.Text>
                </Card.Body>
            </Card>
    );
}

export default MyCards;