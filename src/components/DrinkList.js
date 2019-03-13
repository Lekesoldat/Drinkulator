import React from 'react';

const DrinkList = props => {
  const results = props.results.map(result => {
    return <div>{result.nr}</div>;
  });

  return <div>{results}</div>;
}

export default DrinkList;
