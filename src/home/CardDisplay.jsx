import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardDisplay = ({ single, handleClick }) => (
  <Card bg="light" text="dark" className="mb-4 mx-2" style={{ width: '25rem' }}>
    <Card.Header as="h5">
      <Button
        variant="secondary"
        className="mr-2"
        onClick={() => handleClick(single)}
      >
        {single.topicCount}
      </Button>
      <a href={single.topicLink} target="_blank" rel="noopener noreferrer">
        {single.topicTitle}
      </a>
    </Card.Header>
    <Card.Body>
      <Card.Text> {single.topicBody} </Card.Text>
      <Button variant="danger" onClick={() => handleClick(single)}>
        Mark as viewed
      </Button>
    </Card.Body>
  </Card>
);

export default CardDisplay;
