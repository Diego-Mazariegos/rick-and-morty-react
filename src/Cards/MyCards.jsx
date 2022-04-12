import React from 'react';
import { Card } from 'react-bootstrap'
import './myCards.css'
const MyCards = ({ character }) => {

    return (
            <Card className="back-ground borde" key={character?.id} style={{ width: '18rem' }}>
                <Card.Img className="border-radius" variant="bottom" src={character?.image} />
                <Card.Body className="back-ground">
                    <Card.Title>{character?.name}</Card.Title>
                    <Card.Text>{character?.gender}</Card.Text>
                </Card.Body>
            </Card>
    );
}

export default MyCards;