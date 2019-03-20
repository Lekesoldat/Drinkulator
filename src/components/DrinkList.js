import React from 'react';
import Drink from './Drink';
import { Card, Segment } from 'semantic-ui-react';

const DrinkList = props => {
  if (props.results.length === 0) {
    return null;
  }

  const results = props.results.map(result => {
    return <Drink key={result.article_id} result={result} />;
  });

  return (
    <Segment>
      <Card.Group centered>{results}</Card.Group>
    </Segment>
  );
};

export default DrinkList;
