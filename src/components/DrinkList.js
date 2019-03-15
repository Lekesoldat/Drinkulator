import React from 'react';
import Drink from './Drink';
import { Card } from 'semantic-ui-react';

const DrinkList = props => {
  if (props.results.length === 0) {
    return null;
  }

  const results = props.results.map(result => {
    return <Drink result={result} />;
  });

  return <Card.Group centered>{results}</Card.Group>;
};

export default DrinkList;
