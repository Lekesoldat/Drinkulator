import React from 'react';
import Drink from './Drink';
import { Card } from 'semantic-ui-react';

const DrinkList = props => {
  const results = props.results.map(result => {
    return <Drink result={result} />;
  });

  return <Card.Group>{results}</Card.Group>;
};

export default DrinkList;
