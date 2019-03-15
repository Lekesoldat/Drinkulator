import React from 'react';
import { MLperNOK, NOKperML } from '../calculation';

const DrinkList = props => {
  const results = props.results.map(result => {
    return (
      <div className='ui segment'>
        <div>Name: {result.name}</div>
        <div>Additional name: {result.additional_name}</div>
        <div>Volume: {result.volume_in_milliliter}</div>
        <div>Alcohol: {result.alcohol}</div>
        <div>
          Price: {result.price.amount} {result.price.currency}
        </div>
        <div>
          SEK / Millilitre alcohol{' '}
          {NOKperML(
            result.volume_in_milliliter,
            parseFloat(result.alcohol),
            result.price.amount
          )}{' '}
        </div>
      </div>
    );
  });

  return <div>{results}</div>;
};

export default DrinkList;
