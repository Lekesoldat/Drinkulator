import React from "react";

const DrinkList = props => {
  const results = props.results.map(result => {
    return (
      <div className="ui segment">
        <div>Name: {result.name}</div>
        <div>Additional name: {result.additional_name}</div>
        <div>
          Price: {result.price.amount} {result.price.currency}
        </div>
      </div>
    );
  });

  return <div>{results}</div>;
};

export default DrinkList;
