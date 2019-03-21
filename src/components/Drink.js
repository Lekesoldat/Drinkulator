import React from 'react';
import { Card } from 'semantic-ui-react';
import { KRperML, tubis } from '../calculation';

// TODO: Color mathing type
const colors = [
  'red',
  'blue',
  'teal',
  'olive',
  'green',
  'yellow',
  'orange',
  'purple',
  'black'
];

class Drink extends React.Component {
  KRperML = KRperML(
    this.props.result.volume_in_milliliter,
    parseFloat(this.props.result.alcohol),
    this.props.result.price.amount
  );

  render() {
    return (
      <Card
        header={
          this.props.result.name +
          ' ' +
          (this.props.result.additional_name
            ? this.props.result.additional_name
            : '')
        }
        color={colors[Math.floor(Math.random() * colors.length)]}
        meta={
          (this.KRperML >= tubis.SEKperML
            ? (this.KRperML / tubis.SEKperML).toFixed(2)
            : (tubis.SEKperML / this.KRperML).toFixed(2)) +
          ' ganger ' +
          (this.ratio - tubis.SEKperML >= 0 ? 'dyrere' : 'billigere') +
          ' enn Tubis.'
        }
        description={'Volume: ' + this.props.result.volume_in_milliliter + 'ml'}
      />
    );
  }
}
export default Drink;
