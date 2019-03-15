import React from 'react';
import { Card } from 'semantic-ui-react';
import { MLperNOK, NOKperML } from '../calculation';

// TODO: Fix additional_name can be null
class Drink extends React.Component {
  render() {
    return (
      <Card
        header={
          this.props.result.name + ' ' + this.props.result.additional_name
        }
        meta={
          NOKperML(
            this.props.result.volume_in_milliliter,
            parseFloat(this.props.result.alcohol),
            this.props.result.price.amount
          ) + ' kr/ml alkohol'
        }
        description={'Volume: ' + this.props.result.volume_in_milliliter + 'ml'}
      />
    );
  }
}

export default Drink;
